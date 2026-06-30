const jwt = require("jsonwebtoken");
const db = require("../config/db");
const bcrypt = require("bcryptjs");

// =========================
// Register User
// =========================
const registerUser = async (req, res) => {
    try {
        const { full_name, email, password, year, branch, skills } = req.body;

        // Check if email already exists
        const checkEmail = "SELECT * FROM users WHERE email = ?";

        db.query(checkEmail, [email], async (err, result) => {
            if (err) {
                return res.status(500).json({
                    message: "Database Error",
                    error: err
                });
            }

            if (result.length > 0) {
                return res.status(400).json({
                    message: "Email already registered"
                });
            }

            // Hash Password
            const hashedPassword = await bcrypt.hash(password, 10);

            const sql = `
                INSERT INTO users
                (full_name, email, password, year, branch, skills)
                VALUES (?, ?, ?, ?, ?, ?)
            `;

            db.query(
                sql,
                [full_name, email, hashedPassword, year, branch, skills],
                (err, result) => {

                    if (err) {
                        return res.status(500).json({
                            message: "Registration Failed",
                            error: err
                        });
                    }

                    res.status(201).json({
                        message: "User registered successfully"
                    });

                }
            );
        });

    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            error
        });
    }
};

// =========================
// Login User
// =========================
const loginUser = (req, res) => {

    const { email, password } = req.body;

    const sql = "SELECT * FROM users WHERE email = ?";

    db.query(sql, [email], async (err, result) => {

        if (err) {
            return res.status(500).json({
                message: "Database Error",
                error: err
            });
        }

        if (result.length === 0) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        const user = result[0];

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({
                message: "Invalid password"
            });
        }

        // Generate JWT Token
        const token = jwt.sign(
            {
                id: user.id,
                email: user.email
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "7d"
            }
        );

        res.status(200).json({
            message: "Login successful",
            token,
            user: {
                id: user.id,
                full_name: user.full_name,
                email: user.email,
                year: user.year,
                branch: user.branch,
                skills: user.skills
            }
        });

    });

};

// =========================
// Export
// =========================
module.exports = {
    registerUser,
    loginUser
};