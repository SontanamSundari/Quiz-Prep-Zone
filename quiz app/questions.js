const questions = [
  {
    category: "programming",
    questions: [
      {
        question: "What does HTML stand for?",
        options: ["Hyper Trainer Marking Language", "Hyper Text Marketing Language", "Hyper Text Markup Language", "Hyper Tool Multi Language"],
        correctAnswer: 2,
      },
      {
        question: "Which language is used to style web pages?",
        options: ["HTML", "Python", "CSS", "Java"],
        correctAnswer: 2,
      },
      {
        question: "Which symbol is used for comments in JavaScript?",
        options: ["//", "#", "/* */", "<!-- -->"],
        correctAnswer: 0, 
      },
      {
        question: "What does SQL stand for?",
        options: ["Strong Question Language", "Structured Query Language", "Sequential Query Language", "Statement Question Language"],
        correctAnswer: 1,
      },
      {
        question: "Which method is used to output data in JavaScript?",
        options: ["print()", "log()", "console.log()", "echo()"],
        correctAnswer: 2,
      },
      {
        question: "Which of the following is not a programming language?",
        options: ["Python", "HTML", "Java", "C++"],
        correctAnswer: 1,
      },
      {
        question: "Which company developed the Java language?",
        options: ["Microsoft", "Apple", "Sun Microsystems", "Google"],
        correctAnswer: 2,
      },
      {
        question: "Which of the following is used for backend development?",
        options: ["HTML", "CSS", "Node.js", "Bootstrap"],
        correctAnswer: 2,
      },
      {
        question: "Which tag is used to link JavaScript in HTML?",
        options: ["<link>", "<js>", "<script>", "<style>"],
        correctAnswer: 2,
      },
      {
        question: "Which data structure uses LIFO?",
        options: ["Queue", "Stack", "Array", "Graph"],
        correctAnswer: 1,
      },
      {
        question: "Which operator is used to compare value and type in JavaScript?",
        options: ["==", "===", "!=", "<="],
        correctAnswer: 1,
      },
      {
        question: "Which keyword is used to declare a constant in JavaScript?",
        options: ["let", "var", "const", "define"],
        correctAnswer: 2,
      },
      {
        question: "What is the file extension of JavaScript files?",
        options: [".js", ".java", ".py", ".txt"],
        correctAnswer: 0,
      },
      {
        question: "Which function converts JSON to a JavaScript object?",
        options: ["JSON.parse()", "JSON.stringify()", "JSON.toObject()", "parse.JSON()"],
        correctAnswer: 0,
      },
      {
        question: "Which HTML element is used to create a form?",
        options: ["<form>", "<input>", "<button>", "<table>"],
        correctAnswer: 0,
      },
    ],
  },

  {
    category: "general knowledge",
    questions: [
      {
        question: "What is the capital of India?",
        options: ["Mumbai", "Chennai", "New Delhi", "Kolkata"],
        correctAnswer: 2,
      },
      {
        question: "Who wrote the Indian national anthem?",
        options: ["Mahatma Gandhi", "Rabindranath Tagore", "Subhash Chandra Bose", "Sarojini Naidu"],
        correctAnswer: 1,
      },
      {
        question: "Which is the smallest planet in our solar system?",
        options: ["Mars", "Mercury", "Venus", "Pluto"],
        correctAnswer: 1,
      },
      {
        question: "Who invented the telephone?",
        options: ["Alexander Graham Bell", "Thomas Edison", "Isaac Newton", "Albert Einstein"],
        correctAnswer: 0,
      },
      {
        question: "Which festival is known as the festival of lights?",
        options: ["Holi", "Eid", "Diwali", "Christmas"],
        correctAnswer: 2,
      },
      {
        question: "Which is the national bird of India?",
        options: ["Sparrow", "Eagle", "Peacock", "Parrot"],
        correctAnswer: 2,
      },
      {
        question: "What is the currency of Japan?",
        options: ["Yuan", "Dollar", "Yen", "Won"],
        correctAnswer: 2,
      },
      {
        question: "Which sport is associated with Wimbledon?",
        options: ["Cricket", "Tennis", "Football", "Hockey"],
        correctAnswer: 1,
      },
      {
        question: "How many continents are there?",
        options: ["5", "6", "7", "8"],
        correctAnswer: 2,
      },
      {
        question: "Which gas do plants absorb from the atmosphere?",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
        correctAnswer: 2,
      },
      {
        question: "What is the longest river in India?",
        options: ["Ganga", "Yamuna", "Godavari", "Krishna"],
        correctAnswer: 0,
      },
      {
        question: "Who was the first Prime Minister of India?",
        options: ["Indira Gandhi", "Rajendra Prasad", "Jawaharlal Nehru", "Lal Bahadur Shastri"],
        correctAnswer: 2,
      },
      {
        question: "Which day is celebrated as Independence Day in India?",
        options: ["January 26", "August 15", "October 2", "November 14"],
        correctAnswer: 1,
      },
      {
        question: "What does WWW stand for?",
        options: ["World Wide Web", "Web World Wide", "World Web Width", "Wide World Web"],
        correctAnswer: 0,
      },
      {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        correctAnswer: 1,
      },
    ],
  },

  {
    category: "riddles",
    questions: [
      {
        question: "What has to be broken before you can use it?",
        options: ["Egg", "Glass", "Key", "Lock"],
        correctAnswer: 0,
      },
      {
        question: "I’m tall when I’m young, and I’m short when I’m old. What am I?",
        options: ["Tree", "Candle", "Human", "Pencil"],
        correctAnswer: 1,
      },
      {
        question: "What month of the year has 28 days?",
        options: ["February", "April", "All of them", "Only leap years"],
        correctAnswer: 2,
      },
      {
        question: "What is full of holes but still holds water?",
        options: ["Basket", "Glass", "Sponge", "Pipe"],
        correctAnswer: 2,
      },
      {
        question: "What can you catch but not throw?",
        options: ["Ball", "Cold", "Shadow", "Fever"],
        correctAnswer: 1,
      },
      {
        question: "What has hands but can’t clap?",
        options: ["Monkey", "Robot", "Clock", "Statue"],
        correctAnswer: 2,
      },
      {
        question: "What goes up but never comes down?",
        options: ["Ball", "Smoke", "Age", "Temperature"],
        correctAnswer: 2,
      },
      {
        question: "I have keys but no locks. I have a space but no room. What am I?",
        options: ["Map", "Puzzle", "Keyboard", "Book"],
        correctAnswer: 2,
      },
      {
        question: "What begins with T, ends with T, and has T in it?",
        options: ["Teapot", "Tent", "Toilet", "Tablet"],
        correctAnswer: 0,
      },
      {
        question: "What can travel around the world while staying in one spot?",
        options: ["Satellite", "Stamp", "Shadow", "Wind"],
        correctAnswer: 1,
      },
      {
        question: "What comes once in a minute, twice in a moment, but never in a thousand years?",
        options: ["M", "O", "E", "T"],
        correctAnswer: 0,
      },
      {
        question: "What has a head, a tail, but no body?",
        options: ["Snake", "Coin", "Lizard", "Pen"],
        correctAnswer: 1,
      },
      {
        question: "What can fill a room but takes up no space?",
        options: ["Air", "Sound", "Light", "Dust"],
        correctAnswer: 2,
      },
      {
        question: "Which word is spelled incorrectly in every dictionary?",
        options: ["Wrong", "Incorrect", "Incorrectly", "Misspelled"],
        correctAnswer: 2,
      },
      {
        question: "What gets wetter as it dries?",
        options: ["Soap", "Sponge", "Towel", "Water"],
        correctAnswer: 2,
      },
    ],
  },

  {
    category: "science",
    questions: [
      {
        question: "What is the chemical symbol for water?",
        options: ["O2", "H2O", "CO2", "HO2"],
        correctAnswer: 1,
      },
      {
        question: "What planet is known for its rings?",
        options: ["Mars", "Earth", "Jupiter", "Saturn"],
        correctAnswer: 3,
      },
      {
        question: "Which part of the plant conducts photosynthesis?",
        options: ["Root", "Stem", "Leaf", "Flower"],
        correctAnswer: 2,
      },
      {
        question: "How many bones are in the human body?",
        options: ["206", "201", "210", "196"],
        correctAnswer: 0,
      },
      {
        question: "What gas do humans need to breathe?",
        options: ["Carbon Dioxide", "Hydrogen", "Oxygen", "Nitrogen"],
        correctAnswer: 2,
      },
      {
        question: "What force pulls objects toward Earth?",
        options: ["Magnetism", "Friction", "Gravity", "Pressure"],
        correctAnswer: 2,
      },
      {
        question: "What part of the cell contains DNA?",
        options: ["Cytoplasm", "Ribosome", "Nucleus", "Membrane"],
        correctAnswer: 2,
      },
      {
        question: "What is the boiling point of water?",
        options: ["50°C", "100°C", "150°C", "200°C"],
        correctAnswer: 1,
      },
      {
        question: "Which organ pumps blood through the body?",
        options: ["Lungs", "Kidney", "Brain", "Heart"],
        correctAnswer: 3,
      },
      {
        question: "What is the center of an atom called?",
        options: ["Electron", "Nucleus", "Proton", "Neutron"],
        correctAnswer: 1,
      },
      {
        question: "What is the process of turning liquid into gas called?",
        options: ["Condensation", "Freezing", "Evaporation", "Melting"],
        correctAnswer: 2,
      },
      {
        question: "Which vitamin is provided by sunlight?",
        options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin B"],
        correctAnswer: 2,
      },
      {
        question: "What is the human body’s largest organ?",
        options: ["Liver", "Heart", "Skin", "Brain"],
        correctAnswer: 2,
      },
      {
        question: "What is the main gas found in the air we breathe?",
        options: ["Oxygen", "Carbon Dioxide", "Hydrogen", "Nitrogen"],
        correctAnswer: 3,
      },
      {
        question: "What is the hardest natural substance on Earth?",
        options: ["Gold", "Iron", "Diamond", "Quartz"],
        correctAnswer: 2,
      },
    ],
  },
];
