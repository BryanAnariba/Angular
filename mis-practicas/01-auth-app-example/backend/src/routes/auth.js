import { Router } from "express";

const router = Router();

router.post( '/signin', (req, res) => {
    return res.status(200).json('Signin Works')
});

router.post( '/signup', (req, res) => {
    return res.status(200).json('Signup Works')
});

export { router };