import { Question } from '../types';

export const questions: Question[] = [
  // COMPUTER NETWORKS (10)
  {
    id: 'cn1',
    text: 'A _____ is a collection of interconnected computers that share resources.',
    clue: 'It connects computers like roads connect cities.',
    answer: 'Network',
    category: 'Computer Networks'
  },
  {
    id: 'cn2',
    text: 'What is the full form of OSI?',
    clue: "It's a model that breaks networking into 7 layers.",
    answer: 'Open System Interconnection',
    category: 'Computer Networks'
  },
  {
    id: 'cn3',
    text: 'In TCP, sending and receiving data is done as _______',
    clue: 'TCP treats data as a sequence, not as separate chunks.',
    answer: 'Stream of bytes',
    category: 'Computer Networks'
  },
  {
    id: 'cn4',
    text: 'Differentiate between LAN and WAN.',
    clue: 'One is like a neighborhood; the other is like a country.',
    answer: 'LAN covers small area, WAN covers large area',
    category: 'Computer Networks'
  },
  {
    id: 'cn5',
    text: 'How many layers are there in the OSI model?',
    clue: 'Lucky number in many cultures, and also the count of OSI layers.',
    answer: 'Seven',
    category: 'Computer Networks'
  },
  {
    id: 'cn6',
    text: 'Which command can be used to view the current IP configuration of a device?',
    clue: "It's like asking your computer: 'Where are you on the network?'",
    answer: 'ipconfig',
    category: 'Computer Networks'
  },
  {
    id: 'cn7',
    text: 'Which cable is commonly used in telephone lines?',
    clue: 'Two wires twisted together.',
    answer: 'Twisted pair cable',
    category: 'Computer Networks'
  },
  {
    id: 'cn8',
    text: 'Which topology requires a multipoint connection?',
    clue: "It's simple, cost-effective, but not ideal for heavy traffic.",
    answer: 'Bus Topology',
    category: 'Computer Networks'
  },
  {
    id: 'cn9',
    text: 'What is the term for the data communication system within a building or campus?',
    clue: 'It decides the best path for data to travel between networks.',
    answer: 'Router',
    category: 'Computer Networks'
  },
  {
    id: 'cn10',
    text: 'Which layer is responsible for process-to-process delivery in a general network model?',
    clue: 'This layer makes sure your browser talks to the right web server process.',
    answer: 'Transport layer',
    category: 'Computer Networks'
  },

  // DBMS (10)
  {
    id: 'db1',
    text: 'Which normal form deals with multivalued dependency?',
    clue: "It's the solution when one key maps to multiple sets of values.",
    answer: 'Fourth Normal Form (4NF)',
    category: 'DBMS'
  },
  {
    id: 'db2',
    text: 'What is the full form of DDL?',
    clue: 'Commands like CREATE, ALTER, and DROP belong to this category.',
    answer: 'Data Definition Language',
    category: 'DBMS'
  },
  {
    id: 'db3',
    text: 'Mention the correct command to modify a column in a table.',
    clue: 'This command changes the structure of an existing column.',
    answer: 'ALTER',
    category: 'DBMS'
  },
  {
    id: 'db4',
    text: 'Rectangles in ER diagram represents?',
    clue: 'Think of them as nouns in your data story.',
    answer: 'Entity sets',
    category: 'DBMS'
  },
  {
    id: 'db5',
    text: 'A view of database that appears to an application program is known as?',
    clue: "It's like a filtered map of the database — only shows what the app needs.",
    answer: 'Subschema',
    category: 'DBMS'
  },
  {
    id: 'db6',
    text: 'In RDBMS, different classes of relations are created using __________ technique to prevent anomalies.',
    clue: 'It helps eliminate redundancy and avoid update, insert, and delete anomalies.',
    answer: 'Normal Forms',
    category: 'DBMS'
  },
  {
    id: 'db7',
    text: 'In a Hierarchical database, a hashing function is used to locate the __________.',
    clue: 'Hashing helps quickly find this item based on a key.',
    answer: 'Root',
    category: 'DBMS'
  },
  {
    id: 'db8',
    text: 'Which SQL statement is used to insert a new record into a table?',
    clue: "It's followed by the table name and values to be added.",
    answer: 'INSERT',
    category: 'DBMS'
  },
  {
    id: 'db9',
    text: "What is the SQL statement to add a column named 'Email' of type VARCHAR to Users?",
    clue: 'The full statement begins with ALTER TABLE…',
    answer: 'ALTER TABLE Users ADD COLUMN Email VARCHAR',
    category: 'DBMS'
  },
  {
    id: 'db10',
    text: 'An ER diagram incorrectly shows two entities directly connected by more than one relationship. What is this error known as?',
    clue: "It's a common modeling mistake when relationships aren't properly consolidated.",
    answer: 'Relationship redundancy',
    category: 'DBMS'
  },

  // SOFTWARE ENGINEERING (10)
  {
    id: 'se1',
    text: 'Which type of system view cannot be captured using UML diagrams?',
    clue: "Not about structure or behavior — it's about efficiency.",
    answer: 'Performance view',
    category: 'Software Engineering'
  },
  {
    id: 'se2',
    text: 'The construction of a simpler version of a problem by ignoring details is known as?',
    clue: "It's like zooming out to see the bigger picture.",
    answer: 'Abstraction',
    category: 'Software Engineering'
  },
  {
    id: 'se3',
    text: "When is the 'risk analysis' in the spiral model performed?",
    clue: "It's done at the start of every loop.",
    answer: 'Every loop',
    category: 'Software Engineering'
  },
  {
    id: 'se4',
    text: 'Waterfall model is also called as?',
    clue: 'It follows a strict sequence: requirements → design → implementation → testing → deployment.',
    answer: 'Classic life cycle model',
    category: 'Software Engineering'
  },
  {
    id: 'se5',
    text: 'Software Requirements specification document (SRS) might include:',
    clue: 'Covers performance, reliability, and security expectations.',
    answer: 'Use cases, Class diagram, Sequence diagram',
    category: 'Software Engineering'
  },
  {
    id: 'se6',
    text: 'What are attributes of good software?',
    clue: 'Should be easy to test and verify.',
    answer: 'Maintainability and Functionality',
    category: 'Software Engineering'
  },
  {
    id: 'se7',
    text: 'Which types of errors are typically uncovered during Black Box Testing?',
    clue: 'Focuses on inputs and expected outputs — not the internal code.',
    answer: 'Performance issues or missing functionality',
    category: 'Software Engineering'
  },
  {
    id: 'se8',
    text: 'What is the term for the internal strength of a module?',
    clue: "Starts with 'C' and is the opposite of coupling.",
    answer: 'Cohesion',
    category: 'Software Engineering'
  },
  {
    id: 'se9',
    text: 'Risk management is one of the most important jobs for a?',
    clue: 'Responsible for planning, execution, delivery, handling risks.',
    answer: 'Project Manager',
    category: 'Software Engineering'
  },
  {
    id: 'se10',
    text: 'What is the most important goal of Software Engineering when developing a system?',
    clue: "Starts with 'R' and ensures stability.",
    answer: 'Reliability',
    category: 'Software Engineering'
  },

  // OPERATING SYSTEMS (10)
  {
    id: 'os1',
    text: 'The speed of writing data in magnetic tape disks is comparable to that of disk drives. State True/False.',
    clue: 'Tape drives have slower data retrieval speeds compared to disks.',
    answer: 'True',
    category: 'Operating Systems'
  },
  {
    id: 'os2',
    text: 'UNIX is written in which language?',
    clue: 'Developed at Bell Labs — just like UNIX.',
    answer: 'C',
    category: 'Operating Systems'
  },
  {
    id: 'os3',
    text: 'A systematic procedure for moving the CPU to new process is known as?',
    clue: 'It happens when the CPU switches from one process to another.',
    answer: 'Context Switching',
    category: 'Operating Systems'
  },
  {
    id: 'os4',
    text: 'FIFO scheduling is a type of:',
    clue: 'Once a process starts, it runs till completion.',
    answer: 'Non-preemptive scheduling',
    category: 'Operating Systems'
  },
  {
    id: 'os5',
    text: 'In Banker\'s Algorithm, a system is in a safe state if:',
    clue: 'All processes must be able to finish eventually.',
    answer: 'All processes can be completed without deadlock',
    category: 'Operating Systems'
  },
  {
    id: 'os6',
    text: 'Identify the two steps of a process execution.',
    clue: 'Starts with C and I.',
    answer: 'CPU & I/O Burst',
    category: 'Operating Systems'
  },
  {
    id: 'os7',
    text: 'Main memory of a computer system is?',
    clue: 'Loses its content when the power is turned off.',
    answer: 'Volatile',
    category: 'Operating Systems'
  },
  {
    id: 'os8',
    text: 'The most optimal CPU scheduling algorithm is ________',
    clue: 'It selects the process with the least execution time.',
    answer: 'Shortest Job First',
    category: 'Operating Systems'
  },
  {
    id: 'os9',
    text: 'Which type of OS executes jobs without user interaction?',
    clue: 'This OS type processes batches of jobs together.',
    answer: 'Batch OS',
    category: 'Operating Systems'
  },
  {
    id: 'os10',
    text: 'The kernel of an operating system is:',
    clue: "It's the brain of the OS.",
    answer: 'Manages hardware interactions',
    category: 'Operating Systems'
  }
];