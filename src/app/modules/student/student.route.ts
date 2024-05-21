import express from "express";
import { StudentController } from "./student.controller";

const router = express.Router();

router.post("/create-student", StudentController.createStudent);

router.get("/", StudentController.getAllStudents);

router.get("/:studentId", StudentController.getSingleStudent);

<<<<<<< HEAD
export const StudentRoutes = router;
=======
export const StudentRoutes = router;
>>>>>>> fb6ee955565ab43fc06b9893333731fffea79da2
