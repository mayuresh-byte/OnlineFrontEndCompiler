import mongoose from "mongoose";

interface ICodeSchema {
    fullCode: {
        html: string;
        css: string;
        javascript: string;
    }
}

const CodeSchema = new mongoose.Schema({
    fullCode: {
        html: String,
        css: String,
        javascript: String
    }
})

export const CodeModel = mongoose.model("CodeModel", CodeSchema);