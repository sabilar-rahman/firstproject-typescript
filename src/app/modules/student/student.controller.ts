import { Request, Response } from "express";
import { StudentServices } from "./student.service";

const createStudent = async (req: Request, res: Response) => {
    try {
        const student = req.body;
        // will call server func to send this data
        const result = await StudentServices.createStudentIntoDB(student);

        // send Response
        res.status(200).json({
            success: true,
            message: "student is created",
            data: result,
        });
    } catch (err) {
        console.log(err);
    }
};

export const StudentController ={
    createStudent
}
