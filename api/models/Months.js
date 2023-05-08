import mongoose from "mongoose";

const MonthShema = new mongoose.Schema({
  months: {
    type: [String],
  },
});

export default mongoose.model("Month", MonthShema);
