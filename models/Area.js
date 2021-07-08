const { model, Schema, Types } = require('mongoose')

const ExamSchema = new Schema({
  main: { type: Types.ObjectId, ref: 'Subjects' },
  mainScore: Number,
  alternative: { type: Types.ObjectId, ref: 'Subjects' },
  alternativeScore: Number,
})

const AreaSchema = new Schema({
  qualification: {
    type: new Schema({
      0: Boolean,
      1: Boolean,
    }),
    required: true,
  },
  code: { type: String, required: true },
  name: { type: String, required: true },
  profile: { type: [String], required: true },
  description: { type: String, required: false },
  activities: { type: [String], required: true },
  twoDiplomas: Boolean,
  twoDiplomasDesc: { type: String, required: false },
  partners: { type: [String], required: false },
  exams: [ExamSchema],
  budget: Schema({
    count: { type: Number, required: false },
    score: { type: Number, required: false },
  }),
  paid: Schema({
    count: { type: Number, required: false },
    cost: { type: Number, required: false },
  }),
})

const Area = model('Areas', AreaSchema)

module.exports = { Area, AreaSchema }
