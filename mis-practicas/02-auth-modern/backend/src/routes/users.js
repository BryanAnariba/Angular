import { Router } from "express";

const router = Router();

router.get( '', (req, res) => res.status(200).json('Get-User Works'));

export {
    router
};