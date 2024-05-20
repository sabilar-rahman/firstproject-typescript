import { Schema, model, connect } from "mongoose";
import {
    Guardian,
    Student,
    UserName,
    localGuardian,
} from "./student/student.interface";

const UserNameSchema = new Schema<UserName>({
    firstName: {
        type: String,
        required: true,
    },
    middleName: {
        type: String,
    },
    lastName: {
        type: String,
        required: true,
    },
});

const localGuardianSchema = new Schema<localGuardian>({
    name: {
        type: String,
        required: true,
    },
    occupation: {
        type: String,
        required: true,
    },
    contactNo: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
});

const guardianSchema = new Schema<Guardian>({
    fatherName: {
        type: String,
        required: true,
    },
    fatherContactNo: {
        type: String,
        required: true,
    },
    fatherOccupation: {
        type: String,
        required: true,
    },
    motherName: {
        type: String,
        required: true,
    },
    motherContactNo: {
        type: String,
        required: true,
    },
    motherOccupation: {
        type: String,
        required: true,
    },
});

const studentSchema = new Schema<Student>({
    id: { type: String },
    name: UserNameSchema,

    gender: ["male", "female"],
    dob: {
        type: String,
    },
    email: {
        type: String,
        required: true,
    },
    contactNo: {
        type: String,
        required: true,
    },
    emergencyContactNo: {
        type: String,
        required: true,
    },
    bloodGroup: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],

    presentAddress: {
        type: String,
        required: true,
    },
    permanentAddress: {
        type: String,
        required: true,
    },

    guardian: guardianSchema,
    localGuardian: localGuardianSchema,
    profileImage: {
        type: String,
    },
    isActive: ["active", "blocked"],
});

// model create

const Student = model<Student>('Student', studentSchema)
