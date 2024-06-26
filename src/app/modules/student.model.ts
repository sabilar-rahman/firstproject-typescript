import validator from 'validator';
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
        required: [true, "First name always required"],
        trim: true,
        maxlength: [20, "Not more than 20"],
        validate: {
            validator: function (value: string) {
                const firstNameStr = value.charAt(0).toUpperCase() + value.slice(1);
                console.log(value);
                return firstNameStr === value;

                // if(value !== firstNameStr){
                //     return false
                // }
                // return true
            },
            message: "{VALUE} is not in capitalized formate",
        },
    },
    middleName: {
        type: String,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        validate: {
            validator: (value: string) => validator.isAlpha(value),
            message: "{VALUE} is not valid",


        }
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
    id: { type: String, required: true, unique: true },
    name: {
        type: UserNameSchema,
        required: true,
    },

    gender: {
        type: String,
        enum: {
            values: ["male", "female", "others"],
            message: "{VALUE} is not Valid",
        },
        required: true,
    },
    dob: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate:{
            validator: (value:string)=> validator.isEmail(value),
            message:'{VALUE} is not email type'
        }
    },
    contactNo: {
        type: String,
        required: true,
    },
    emergencyContactNo: {
        type: String,
        required: true,
    },
    bloodGroup: {
        type: String,
        enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
    },

    presentAddress: {
        type: String,
        required: true,
    },
    permanentAddress: {
        type: String,
        required: true,
    },

    guardian: {
        type: guardianSchema,
        required: true,
    },

    localGuardian: {
        type: localGuardianSchema,
        required: true,
    },

    profileImage: {
        type: String,
    },
    isActive: {
        type: String,
        enum: ["active", "blocked"],
        default: "active",
    },
});

// model create

export const StudentModel = model<Student>("Student", studentSchema);
