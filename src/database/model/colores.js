import mongoose, {Schema} from "mongoose";

const colorSchema = new Schema({
    codHexadecimal: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                return /^#[0-9a-fA-F]{6}$/.test(v);
            }
        }
    },
    rgb: {
        r: {
            type: Number,
            required: true,
            min: 0,
            max: 255
        },
        g: {
            type: Number,
            required: true,
            min: 0,
            max: 255
        },
        b: {
            type: Number,
            required: true,
            min: 0,
            max: 255
        }
    },
    nombreColor: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 40
    },
})

const Color = mongoose.model('color', colorSchema);

export default Color;