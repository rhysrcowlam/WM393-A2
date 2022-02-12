import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { AbstractQuizService } from './quiz.abstract.service';
import { QuizQuestion } from './quiz.interface';

@Injectable({
  providedIn: 'root'
})
export class MockQuizService implements AbstractQuizService {

  // Array of question objects to be used in quiz's.
  private mockQuizQuestions: QuizQuestion[] = [
    {
      id: '1',
      question: 'What is the definition of Software?',
      answers: [
        'The set of instructions telling a computer how to work.',
        'A program that tells a computer what to do.',
        'A group of programs performing a specific task.',
        'A collection of programs coordinating with the hardware to run the machine for any purpose.'
      ],
      correctAnswer: 3,
    },
    {
      id: '2',
      question: 'Which of the following is not a type of Software?',
      answers: [
        'Stand-alone software.',
        'Interactive transaction-based software.',
        'Embedded control software.',
        'Batch processing software.',
        'Assignment marking software.'
      ],
      correctAnswer: 4,
    },
    {
      id: '3',
      question: 'Which of the following is not a characteristic of good Software?',
      answers: [
        'Maintainable.',
        'Efficient.',
        'Dependable.',
        'Unacceptable.'
      ],
      correctAnswer: 3,
    },
    {
      id: '4',
      question: 'Which of the following is real programming language?',
      answers: [
        'Scales.',
        'WebCraft.',
        'C++.',
        'RGBKeyboard.'
      ],
      correctAnswer: 2,
    },
    {
      id: '5',
      question: 'What is the correct definition of cloud computing?',
      answers: [
        'Cloud computing is a model for enabling convenient, on-demand network access to a shared pool of configurable computing resources.',
        'Cloud computing is server virtualisation.',
        'The cloud is a place where software Engineers go to complete specific programing tasks.',
      ],
      correctAnswer: 0
    },
    {
      id: '6',
      question: 'What is not an advantage of cloud computing?',
      answers: [
        'Cost efficiency.',
        'Difficult to access.',
        'Almost unlimited resources.',
        'Easier to backup and store data.'
      ],
      correctAnswer: 1
    },
    {
      id: '7',
      question: 'What is not a disadvantage of cloud computing',
      answers: [
        'No Internet, no access.',
        'Hard to migrate to other platforms.',
        'Great service with low bandwidth.'
      ],
      correctAnswer: 2
    },
    {
      id: '8',
      question: 'Which of the following is typically a primary service in cloud computing?',
      answers: [
        'Hardware as a service.',
        'Download as a service.',
        'Infrastructure as a service.'
      ],
      correctAnswer: 2
    },

    {
      id: '9',
      question: 'What is the Software Development Life Cycle?',
      answers: [
        'SDLC is the process of dividing software development work into smaller steps to improve design.',
        'SDLC is a tutorial for writing software programs.',
        'SDLC is a framework for extending the life of hardware components.'
      ],
      correctAnswer: 0
    },
    {
      id: '10',
      question: 'Which of the following is a type of plan-driven development?',
      answers: [
        'River model.',
        'Corkscrew model.',
        'V model.',
        'Z model.'
      ],
      correctAnswer: 2
    },
    {
      id: '11',
      question: 'Which of the following is not a type of Agile development?',
      answers: [
        'Scrum model.',
        'Kanban.',
        'Underwhelming programming.',
        'Rapid Application development.'
      ],
      correctAnswer: 1
    },
    {
      id: '12',
      question: 'Which of the following is not a problem when using agile development for large and long-lifetime systems?',
      answers: [
        'Agile development is most appropriate for new software rather than software maintenance.',
        'A lot of software now involves worldwide distributed teams.',
        'Customers have more involvement on maintenance projects.'
      ],
      correctAnswer: 2
    },
    {
      id: '13',
      question: 'Where can Linux be found?',
      answers: [
        'America.',
        'Office desks.',
        'London.',
        'Everywhere'
      ],
      correctAnswer: 3
    },
    {
      id: '14',
      question: 'Which of the following is not a good reason to use Linux?',
      answers: [
        'Runs on many hardware platforms.',
        'Free/Open source software.',
        'It is stable, reliable and secure.',
        'Not great for servers.'
      ],
      correctAnswer: 3
    },
    {
      id: '15',
      question: 'Which of the following is not a part of the Linux File system hierarchy?',
      answers: [
        '/bin',
        '/home',
        '/boot',
        'C:/'
      ],
      correctAnswer: 3
    },
    {
      id: '16',
      question: 'Which of the following is not a Linux terminal command for editing files?',
      answers: [
        'cp',
        'mv',
        'mkdir',
        'rmdir',
        'sudo'
      ],
      correctAnswer: 4
    },
    {
      id: '17',
      question: 'What is the correct definition of Intelligence?',
      answers: [
        'The ability of one to come to a conclusion all on their own.',
        'The ability to understand data and make decisions at random.',
        'The ability to learn, understand, and make judgements or have opinions that are based on reason.'
      ],
      correctAnswer: 2
    },
    {
      id: '18',
      question: 'Which of the following is not an example of real AI',
      answers: [
        'Automated bookings.',
        'Weather prediction.',
        'Skynet.',
        'Product recognition.'
      ],
      correctAnswer: 2
    },

    {
      id: '19',
      question: 'Which of the following is not an aspect of AI?',
      answers: [
        'Thinking Humanly',
        'Thinking Rationally',
        'Acting Humanly',
        'Acting Irrationally',

      ],
      correctAnswer: 3
    },
    {
      id: '20',
      question: 'What is the correct definition of an Agent?',
      answers: [
        'An Agent is an entity that percieves its surroundings.',
        'An Agent is an entity that performs actions.',
        'An Agent is an entity that percieves and acts.'
      ],
      correctAnswer: 2
    },
    {
      id: '21',
      question: 'Which of the following does not dictate a rational Agents actions?',
      answers: [
        'Information recieved from the Agents sensors.',
        'The Agents own personal agenda.',
        'The Agents actuators.',
        'Characteristics of the Agents environment.'
      ],
      correctAnswer: 1
    },
    {
      id: '22',
      question: 'Which of the following is not an example of an uninformed search?',
      answers: [
        'Breadth first search.',
        'Depth first search.',
        'Random selection search.',
        'Uniform cost search'
      ],
      correctAnswer: 2
    },
    {
      id: '23',
      question: 'What kind of Agent is best suited for a Search task?',
      answers: [
        'A lost Agent.',
        'A smart Agent.',
        'A reflex-based Agent.',
        'A goal-based Agent.'
      ],
      correctAnswer: 3
    },

    {
      id: '24',
      question: 'Which of the following is not a type of task environment?',
      answers: [
        'Fully Observable vs Partially Observable.',
        'Cluttered vs Open.',
        'Episodic vs Sequential.',
        'Static vs Dynamic.'
      ],
      correctAnswer: 1
    },
    {
      id: '25',
      question: 'What is the correct definition of an environment state?',
      answers: [
        'A state is a small portion of an Agents environment.',
        'A state is centralised political organisation.',
        'A state is the condition of an environment at any given stage.'
      ],
      correctAnswer: 2
    },
    {
      id: '26',
      question: 'Which of the following is not a type of an Informed search?',
      answers: [
        'Greedy best first search.',
        'A* search.',
        'Guided search.',
      ],
      correctAnswer: 2
    },
    {
      id: '27',
      question: 'What does the A* algorithm use to make decisions?',
      answers: [
        'Scientific theories.',
        'Algebraic fractions.',
        'Heuristic functions.',
        'Budget calculators.'
      ],
      correctAnswer: 2
    },

    {
      id: '28',
      question: 'What is an adversarial search?',
      answers: [
        'A search to find an Agents adversary.',
        'A search performed by an Agents adversary.',
        'A search where an adversary is changing the state of the problem every step in a direction you do not want.'
      ],
      correctAnswer: 2
    },
    {
      id: '29',
      question: 'What is a Knowledge Based Agent?',
      answers: [
        'An Agent that is dependent on its environments state.',
        'An Agent that specialises in searches.',
        'An Agent that uses a representation of knowledge to reason and solve problems.'
      ],
      correctAnswer: 2
    },
    {
      id: '30',
      question: 'What is a Model?',
      answers: [
        'A childs toy.',
        'A plastic statue.',
        'A sculpture of an important object.',
        'A mathematical abstraction of a real world problem.'
      ],
      correctAnswer: 3
    },
    {
      id: '31',
      question: 'What is Inference',
      answers: [
        'The process of sending out an enquiry.',
        'The process of finding answers to specific questions using models.',
        'The process of inferring.',
        'The process of gaining evidence.'
      ],
      correctAnswer: 1
    },
    {
      id: '32',
      question: 'what is a knowledge base?',
      answers: [
        'A knowledge base is a collection of knowledge.',
        'A knowledge base is a smart database.',
        'A knowledge base is a set of sentences stored by the Agent, that are all known to be True.'
      ],
      correctAnswer: 0
    },
  ];

  // Method for retrieving the required questions for a quiz.
  public getQuizQuestions(id: string): Observable<QuizQuestion | undefined> {
    // Return question objects with an id that matches the id parsed into the method.
    const question = this.mockQuizQuestions.find(x => x.id == id);
    if (question) {
      return of(question);
    }
    return of(undefined);
  }
} 