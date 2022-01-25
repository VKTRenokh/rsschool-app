import { InterviewTemplate } from './types';

export const corejs1Template: InterviewTemplate = {
  name: 'CoreJS',
  examplesUrl: 'https://github.com/rolling-scopes-school/tasks/blob/master/tasks/interview-corejs.md',
  categories: [
    {
      id: 1000,
      name: 'Basics',
      questions: [
        { id: 1001, name: 'Data types' },
        { id: 1002, name: 'Number methods' },
        { id: 1003, name: 'String methods' },
        { id: 1004, name: 'let var const - differences' },
        { id: 1005, name: 'ternary operator' },
        { id: 1006, name: 'switch case - examples, where it can be useful' },
        { id: 1007, name: 'type conversions' },
      ],
    },
    {
      id: 1010,
      name: 'Advanced Expressions',
      questions: [
        { id: 1011, name: 'Be able to discover cases of implicit data types conversion into boolean, string, number' },
        { id: 1012, name: 'Strict comparison' },
        { id: 1013, name: 'Object.is (optional)' },
        { id: 1014, name: 'what is polyfills' },
      ],
    },
    {
      id: 1020,
      name: 'Function',
      questions: [
        { id: 1021, name: 'arrow func/ func expression/ func declaration' },
        { id: 1022, name: 'Strict comparison' },
        { id: 1023, name: 'Object.is(optional)' },
        { id: 1024, name: 'what is polyfills' },
      ],
    },
    {
      id: 1030,
      name: 'Date & time (optional)',
      questions: [
        { id: 1031, name: 'Date object' },
        { id: 1032, name: 'Date methods, props' },
      ],
    },
    {
      id: 1040,
      name: 'Objects Built-in methods.',
      questions: [{ id: 1041, name: 'Know how to use built-in methods' }],
    },
    {
      id: 1050,
      name: 'Arrays Built-in methods',
      questions: [
        { id: 1051, name: 'Know how to copy array' },
        { id: 1052, name: 'Know how to modify array' },
      ],
    },
    {
      id: 1060,
      name: 'Arrays Iterating, Sorting, Filtering',
      questions: [
        { id: 1061, name: 'Know how to sort Array' },
        { id: 1062, name: 'Know several method how to iterate Array elements' },
      ],
    },
    {
      id: 1070,
      name: 'Loops',
      questions: [
        { id: 1071, name: 'for loop' },
        { id: 1072, name: 'while loop' },
        { id: 1073, name: 'do while loop' },
      ],
    },
    {
      id: 1080,
      name: 'Global object window',
      questions: [{ id: 1081, name: 'Document' }],
    },
    {
      id: 1090,
      name: 'Global object window',
      questions: [{ id: 1091, name: 'Document' }],
    },
    {
      id: 1100,
      name: 'Events Basics',
      questions: [
        { id: 1101, name: 'Event Phases' },
        { id: 1102, name: 'Event Listeners' },
        { id: 1103, name: 'DOM Events' },
        { id: 1104, name: 'Know basic Event types' },
        { id: 1105, name: 'Mouse / Keyboard Events' },
        { id: 1106, name: 'Form / Input Events' },
      ],
    },
    {
      id: 1110,
      name: 'Events Basics',
      questions: [
        { id: 1111, name: 'Event Phases' },
        { id: 1112, name: 'Event Listeners' },
        { id: 1113, name: 'DOM Events' },
        { id: 1114, name: 'Know basic Event types' },
        { id: 1115, name: 'Mouse / Keyboard Events' },
        { id: 1116, name: 'Form / Input Events' },
      ],
    },
    {
      id: 1120,
      name: 'Timers',
      questions: [
        { id: 1121, name: 'setTimeout' },
        { id: 1122, name: 'setInterval' },
      ],
    },
    {
      id: 1130,
      name: 'Web Storage API & cookies',
      questions: [
        { id: 1131, name: 'LocalStorage' },
        { id: 1132, name: 'SessionStorage' },
      ],
    },
  ],
};