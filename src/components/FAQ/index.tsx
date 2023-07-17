import React from 'react';
import FaqCard from './faqCard';

const questionAndAnswer = [
  {
    id: 1,
    question: 'How do i apply for a loan?',
    answer:
      'You can apply for a loan by clicking the icon “apply for loan”, filling out the loan application form, and submitting it',
  },
  {
    id: 2,
    question: 'How much can i borrow?',
    answer:
      'You can apply for a loan by clicking the icon “apply for loan”, filling out the loan application form, and submitting it',
  },
  {
    id: 3,
    question: 'What is the loan repayment plan?',
    answer:
      'You can apply for a loan by clicking the icon “apply for loan”, filling out the loan application form, and submitting it',
  },
  {
    id: 4,
    question: 'What is the maximum loan tenor?',
    answer:
      'You can apply for a loan by clicking the icon “apply for loan”, filling out the loan application form, and submitting it',
  },
  {
    id: 5,
    question: 'How can i repay my load?',
    answer:
      'You can apply for a loan by clicking the icon “apply for loan”, filling out the loan application form, and submitting it',
  },
];
const FAQ = () => {
  const [toggle, setToggle] = React.useState(0);
  return (
    <div className="md:w-[70%] w-full">
      {/* <h3 className="text-center font-[800]">FAQS</h3> */}
      <div>
        {questionAndAnswer.map((item) => {
          return (
            <FaqCard
              key={item.id}
              answer={item.answer}
              question={item.question}
              onToggle={toggle}
              onHandleToggle={setToggle}
              id={item.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;
