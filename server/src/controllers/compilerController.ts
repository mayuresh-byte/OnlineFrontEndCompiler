import { Request, Response } from "express";
import { CodeModel } from "../models/CodeModel";


export const saveCode = async (req: Request, res: Response) => {
    const {fullCode} = req.body;
    try {
        const newCode = await CodeModel.create({
            fullCode: fullCode
        });

        return res.status(201).send({url: newCode._id, status: "Saved"});
    } catch (error) {
        return res.status(500).send({message: 'Error saving code', error})
    }
};

export const loadCode = async (req: Request, res: Response) => {
    const urlId = req.body.urlId;
    try {
        const existingCode = await CodeModel.findById(urlId);
        if(!existingCode) {
            return res.status(400).send({message: 'Code not found'})
        }
        return res.status(200).send({fullCode: existingCode.fullCode})
    } catch (error) {
        return res.status(500).send({message: 'Error laoding code', error})
    }
};