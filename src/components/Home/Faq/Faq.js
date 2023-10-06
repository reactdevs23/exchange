import React, { useState } from "react";
import { BiChevronUp, BiChevronDown } from "react-icons/bi";
import { Heading, Title, Tagline } from "../CommonStyle/CommontStyles";
import styles from "./Faq.module.css";
import { faqCoin, faqImage, faqStar } from "../../../images/images";

const Faq = () => {
  const [activeFaq, setActiveFaq] = useState(0);
  const faqs = [
    {
      question: "Who We can Trade  within Platform?",
      answer:
        "Lörem ipsum kasede megavyhovis. Spesopp spefodat. Höna kis taregt. Tuning cirkulent södibel cirkulent. Androkrati intrara. Ded mörar. ",
    },
    {
      question: "What are the fees ?",
      answer:
        "Lörem ipsum kasede megavyhovis. Spesopp spefodat. Höna kis taregt. Tuning cirkulent södibel cirkulent. Androkrati intrara. Ded mörar. ",
    },
    {
      question: "How we can do Spot trading?",
      answer:
        "Lörem ipsum kasede megavyhovis. Spesopp spefodat. Höna kis taregt. Tuning cirkulent södibel cirkulent. Androkrati intrara. Ded mörar. ",
    },
    {
      question: "How to be keep your account Secure?",
      answer:
        "Lörem ipsum kasede megavyhovis. Spesopp spefodat. Höna kis taregt. Tuning cirkulent södibel cirkulent. Androkrati intrara. Ded mörar. ",
    },
    {
      question: "What are the Benefits of Using Platform?",
      answer:
        "Lörem ipsum kasede megavyhovis. Spesopp spefodat. Höna kis taregt. Tuning cirkulent södibel cirkulent. Androkrati intrara. Ded mörar. ",
    },
  ];
  return (
    <section className={[styles.faqContainer, "mainWrapper"].join(" ")}>
      <img src={faqStar} alt="#" className={styles.faqStar} />
      <img src={faqCoin} alt="#" className={styles.faqCoin} />
      <div className={styles.textContainer}>
        <Heading center>Questions</Heading>
        <Title center mainTitle>
          Frequently Asked Questions
        </Title>
        <Tagline center>
          Lörem ipsum fupor viren. Tiroktigt spesasa. Makrorar.{" "}
          <br className={styles.br} /> Täde didöhet inte kektigt, demoism. Redot
          bedäbel.
        </Tagline>
      </div>

      <div className={styles.wrapper}>
        <div className={styles.faqs}>
          {faqs.map((el, i) => (
            <div className={styles.faq} key={i}>
              <div
                className={styles.questionContainer}
                onClick={() => setActiveFaq(i)}
              >
                <p
                  className={[
                    styles.question,
                    activeFaq === i && styles.activeQuestion,
                  ].join(" ")}
                >
                  {el.question}
                </p>
                <div className={styles.arrowContainer}>
                  {activeFaq === i ? (
                    <BiChevronUp className={styles.arrow} />
                  ) : (
                    <BiChevronDown className={styles.arrow} />
                  )}
                </div>
              </div>

              {activeFaq === i && <p className={styles.answer}>{el.answer}</p>}
            </div>
          ))}

          <div className={styles.contactUsContainer}>
            <p className={styles.answer}>Still Have Questions?</p>

            <button className={styles.contactUsButton}>Contact Us</button>
          </div>
        </div>
        <img src={faqImage} alt="#" className={styles.image} />
      </div>
    </section>
  );
};

export default Faq;
