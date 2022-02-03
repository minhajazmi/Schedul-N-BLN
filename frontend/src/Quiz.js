import { React, useState } from 'react';
import { useForm } from 'react-hook-form';
import { PieChart } from 'react-minimal-pie-chart';
import ModalLog from './ModalLog';
import SignUp from './Signup'
import axios from 'axios';

function Quiz() {
  const types = [
    {
      res: "hopper",
      name: "Hopper",
      content:
        "Hoppers enjoy variety and the spontaneity of switching tasks frequently, but may have trouble completing all the open items on their task list. Hoppers enjoy change of pace, and the freedom to switch from one activity to another. They may often be easily distracted, however, and thereby run the risk of going off-track and not finishing what they start. Having too many open items simultaneously can ultimately cause them to be unproductive.",
      advice:
        "When possible, Hoppers should eliminate distractions to offer themselves more uninterrupted chunks of time in which to finish tasks. Timers may help them stay on track. They will also find it helpful to be aware of shifts in their energy levels to recognize when they need to take a break and thereby reduce the odds of being distracted.",
      pie: 4,
    },
    {
      res: "hyperfocus",
      name: "Hyper-Focus",
      content:
        "The Hyper Focus style is absorbed by detail but may have trouble stopping one activity to transition to something new. This style preference gets so involved in what they are doing that they may ignore reminders and cues to move on to the next priority. When Hyper Focus people are deeply involved in the task at hand, they can become so absorbed in the details, that they can lose track of time.",
      advice:
        "It's important for Hyper Focus people to work from a prescribed plan and create natural bridges with strategies for moving from task to task. They can benefit from using backwards planning and scheduling to determine necessary project phases and start/finish dates, as well as chunking time into 20 minute segments.",
      pie: 0,
    },
    {
      res: "big idea",
      name: "Big Picture",
      content:
        "Big Picture individuals are big thinkers but often leave the details out of their plans. They find details less attractive than global strategies and tasks that call for spontaneity. Their lofty vision and high speed of action can cause them to overlook or ignore the essential small pieces necessary for success.",
      advice:
        "Big Picture types are much more effective when partnered with people who will handle the details and follow-through on tasks. On their own, they need to create simple, basic routines to follow, write things down, and make sure that their communications are clear and precise.",
      pie: 2,
    },
    {
      res: "perfectionist",
      name: "Perfectionist Plus",
      content:
        "Perfectionist Plus types thrive on details and an endless pursuit to 'get things right'. Because of their very high personal standards, they believe that they should be able to do nearly everything themselves and do it all well. They may be overly concerned about others' approval and often have difficulty saying 'No' to the requests of others for their time.",
      advice:
        "Perfectionist Plus types must distinguish between high and low priority activities so that they can spend their time on those with the highest payoff. It's important for them to learn how to say no and to delegate tasks where possible so that they have room on their plate for the things they most enjoy.",
      pie: 5,    
    },
    {
      res: "impulsive",
      name: "Impulsive",
      content:
        "Impulsive types love to leap but may forget to look first. Enjoying the rush of adrenaline, they would rather act spontaneously than follow a preset plan. However, lack of planning, or diminishing its importance, can result in missed deadlines and letting others down. Impulsives tend to get bored easily andcan find routine and maintenance tasks distasteful.",
      advice:
        "It's helpful for Impulsive's to gain perspective by looking at the bigger picture in order to make better decisions. They will benefit from longer-term planning, routine reviews, and daily targets that allow time for spontaneity. Posting mantras, intentions and reminders of their overall goals will often help remind them to stay focused on their highest priorities.",
      pie: 1,
    },
    {
      res: "cliff hanger",
      name: "Cliff-Hanger",
      content:
        "Cliff Hangers believe that they work most effectively when under the pressure of a deadline. Cliff Hangers like having an adrenaline rush to help them focus, but working under tight deadlines often doesn't leave enough time to check work thoroughly or to handle things that might go wrong. Waiting to start until the last moment often causes added stress, tension and even missed deadlines.",
      advice:
        "Cliff Hangers need to monitor their time to better estimate how long things really take to complete. They will benefit by identifying their highest priorities and scheduling earlier start dates for those tasks. If they still choose to procrastinate, it should be on the less significant priorities.",
      pie: 3,
    },
  ];
  const shiftSize = 7;
  const [signUpModal, setSignUpModal] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });
  const [result, setResult] = useState(undefined);

  const onSubmit = (data) => {
    console.log(errors);

    axios
      .post("http://localhost:4000/api/questions", data)
      .then((response) => {
        console.log(response.data);
        console.log(response.data.pyScriptRes.TM_type);
        setResult(types.find((type) => type.res === response.data.pyScriptRes.TM_type));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (result === undefined) {
    return (
      <>
        <div className="quizContainer">
          <div className="quizGreeting">
            <h3>Start your journey here!</h3>
            <p>
              Begin by taking this quiz to find out your time management style,
              so we know which advice will work best for you
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="quizForm">
            <div className="quizOptions">
              <span>completely disagree</span>
              <span>completely agree</span>
            </div>
            <div className="quizOptionsN">
              <span>1</span>
              <span>5</span>
            </div>
            <div className="radioContainer">
              <label>I enjoy working on more than one project at a time.</label>
              <input
                {...register("enjoy", { required: true })}
                type="radio"
                value="completelyDisagree"
              />
              <input
                {...register("enjoy", { required: true })}
                type="radio"
                value="IDisagree"
              />
              <input
                {...register("enjoy", { required: true })}
                type="radio"
                value="neutral"
              />
              <input
                {...register("enjoy", { required: true })}
                type="radio"
                value="IAgree"
              />
              <input
                {...register("enjoy", { required: true })}
                type="radio"
                value="completelyAgree"
              />
            </div>
            <div className="radioContainer">
              <label>
                If I have the choice, I prefer to work alone rather than group
                work.
              </label>
              <input
                {...register("choice", { required: true })}
                type="radio"
                value="completelyDisagree"
              />
              <input
                {...register("choice", { required: true })}
                type="radio"
                value="IDisagree"
              />
              <input
                {...register("choice", { required: true })}
                type="radio"
                value="neutral"
              />
              <input
                {...register("choice", { required: true })}
                type="radio"
                value="IAgree"
              />
              <input
                {...register("choice", { required: true })}
                type="radio"
                value="completelyAgree"
              />
            </div>
            <div className="radioContainer">
              <label>I like to seek thrill?</label>
              <input
                {...register("thrilled", { required: true })}
                type="radio"
                value="completelyDisagree"
              />
              <input
                {...register("thrilled", { required: true })}
                type="radio"
                value="IDisagree"
              />
              <input
                {...register("thrilled", { required: true })}
                type="radio"
                value="neutral"
              />
              <input
                {...register("thrilled", { required: true })}
                type="radio"
                value="IAgree"
              />
              <input
                {...register("thrilled", { required: true })}
                type="radio"
                value="completelyAgree"
              />
            </div>
            <div className="radioContainer">
              <label>I can be easily distracted during work or Study?</label>
              <input
                {...register("distraction", { required: true })}
                type="radio"
                value="completelyDisagree"
              />
              <input
                {...register("distraction", { required: true })}
                type="radio"
                value="IDisagree"
              />
              <input
                {...register("distraction", { required: true })}
                type="radio"
                value="neutral"
              />
              <input
                {...register("distraction", { required: true })}
                type="radio"
                value="IAgree"
              />
              <input
                {...register("distraction", { required: true })}
                type="radio"
                value="completelyAgree"
              />
            </div>
            <div className="radioContainer">
              <label>I have high standard for my work or study</label>
              <input
                {...register("highStandard", { required: true })}
                type="radio"
                value="completelyDisagree"
              />
              <input
                {...register("highStandard", { required: true })}
                type="radio"
                value="IDisagree"
              />
              <input
                {...register("highStandard", { required: true })}
                type="radio"
                value="neutral"
              />
              <input
                {...register("highStandard", { required: true })}
                type="radio"
                value="IAgree"
              />
              <input
                {...register("highStandard", { required: true })}
                type="radio"
                value="completelyAgree"
              />
            </div>
            <div className="radioContainer">
              <label>I like to switch between tasks.</label>
              <input
                {...register("switchTask", { required: true })}
                type="radio"
                value="completelyDisagree"
              />
              <input
                {...register("switchTask", { required: true })}
                type="radio"
                value="IDisagree"
              />
              <input
                {...register("switchTask", { required: true })}
                type="radio"
                value="neutral"
              />
              <input
                {...register("switchTask", { required: true })}
                type="radio"
                value="IAgree"
              />
              <input
                {...register("switchTask", { required: true })}
                type="radio"
                value="completelyAgree"
              />
            </div>
            <div className="radioContainer">
              <label>I focus a lot on details.</label>
              <input
                {...register("focus", { required: true })}
                type="radio"
                value="completelyDisagree"
              />
              <input
                {...register("focus", { required: true })}
                type="radio"
                value="completelyAgree"
              />
              <input
                {...register("focus", { required: true })}
                type="radio"
                value="neutral"
              />
              <input
                {...register("focus", { required: true })}
                type="radio"
                value="IDisagree"
              />
              <input
                {...register("focus", { required: true })}
                type="radio"
                value="IAgree"
              />
            </div>
            <div className="radioContainer">
              <label>I usually dive into it when I get a new task.</label>
              <input
                {...register("concentrate", { required: true })}
                type="radio"
                value="completelyDisagree"
              />
              <input
                {...register("concentrate", { required: true })}
                type="radio"
                value="IDisagree"
              />
              <input
                {...register("concentrate", { required: true })}
                type="radio"
                value="neutral"
              />
              <input
                {...register("concentrate", { required: true })}
                type="radio"
                value="IAgree"
              />
              <input
                {...register("concentrate", { required: true })}
                type="radio"
                value="completelyAgree"
              />
            </div>
            <div className="radioContainer">
              <label>I seek others approval.</label>
              <input
                {...register("approval", { required: true })}
                type="radio"
                value="completelyDisagree"
              />
              <input
                {...register("approval", { required: true })}
                type="radio"
                value="IDisagree"
              />
              <input
                {...register("approval", { required: true })}
                type="radio"
                value="neutral"
              />
              <input
                {...register("approval", { required: true })}
                type="radio"
                value="IAgree"
              />
              <input
                {...register("approval", { required: true })}
                type="radio"
                value="completelyAgree"
              />
            </div>
            <div className="radioContainer">
              <label>I have a daily or weekly plan for my work or study.</label>
              <input
                {...register("plan", { required: true })}
                type="radio"
                value="completelyDisagree"
              />
              <input
                {...register("plan", { required: true })}
                type="radio"
                value="IDisagree"
              />
              <input
                {...register("plan", { required: true })}
                type="radio"
                value="neutral"
              />
              <input
                {...register("plan", { required: true })}
                type="radio"
                value="IAgree"
              />
              <input
                {...register("plan", { required: true })}
                type="radio"
                value="completelyAgree"
              />
            </div>
            <div className="radioContainer">
              <label>I enjoy having big ideas.</label>
              <input
                {...register("ideas", { required: true })}
                type="radio"
                value="completelyDisagree"
              />
              <input
                {...register("ideas", { required: true })}
                type="radio"
                value="IDisagree"
              />
              <input
                {...register("ideas", { required: true })}
                type="radio"
                value="neutral"
              />
              <input
                {...register("ideas", { required: true })}
                type="radio"
                value="IAgree"
              />
              <input
                {...register("ideas", { required: true })}
                type="radio"
                value="completelyAgree"
              />
            </div>
            <div className="radioContainer">
              <label>I procrastinate often.</label>
              <input
                {...register("procrastinate", { required: true })}
                type="radio"
                value="completelyDisagree"
              />
              <input
                {...register("procrastinate", { required: true })}
                type="radio"
                value="IDisagree"
              />
              <input
                {...register("procrastinate", { required: true })}
                type="radio"
                value="neutral"
              />
              <input
                {...register("procrastinate", { required: true })}
                type="radio"
                value="IAgree"
              />
              <input
                {...register("procrastinate", { required: true })}
                type="radio"
                value="completelyAgree"
              />
            </div>
            <div className="radioContainer">
              <label>I find it hard to switch between tasks.</label>
              <input
                {...register("hard", { required: true })}
                type="radio"
                value="completelyDisagree"
              />
              <input
                {...register("hard", { required: true })}
                type="radio"
                value="IDisagree"
              />
              <input
                {...register("hard", { required: true })}
                type="radio"
                value="neutral"
              />
              <input
                {...register("hard", { required: true })}
                type="radio"
                value="IAgree"
              />
              <input
                {...register("hard", { required: true })}
                type="radio"
                value="completelyAgree"
              />
            </div>
            <div className="radioContainer">
              <label>
                I like spontaneous activities or I like to solve spontaneous
                tasks.
              </label>
              <input
                {...register("spontaneous", { required: true })}
                type="radio"
                value="completelyDisagree"
              />
              <input
                {...register("spontaneous", { required: true })}
                type="radio"
                value="IDisagree"
              />
              <input
                {...register("spontaneous", { required: true })}
                type="radio"
                value="neutral"
              />
              <input
                {...register("spontaneous", { required: true })}
                type="radio"
                value="IAgree"
              />
              <input
                {...register("spontaneous", { required: true })}
                type="radio"
                value="completelyAgree"
              />
            </div>
            <div className="radioContainer">
              <label>
                I spend a lot of time on finishing touches of my work.
              </label>
              <input
                {...register("finishing", { required: true })}
                type="radio"
                value="completelyDisagree"
              />
              <input
                {...register("finishing", { required: true })}
                type="radio"
                value="IDisagree"
              />
              <input
                {...register("finishing", { required: true })}
                type="radio"
                value="neutral"
              />
              <input
                {...register("finishing", { required: true })}
                type="radio"
                value="IAgree"
              />
              <input
                {...register("finishing", { required: true })}
                type="radio"
                value="completelyAgree"
              />
            </div>
            <div className="radioContainer">
              <label>I find it hard to focus for a long period.</label>
              <input
                {...register("period", { required: true })}
                type="radio"
                value="completelyDisagree"
              />
              <input
                {...register("period", { required: true })}
                type="radio"
                value="IDisagree"
              />
              <input
                {...register("period", { required: true })}
                type="radio"
                value="neutral"
              />
              <input
                {...register("period", { required: true })}
                type="radio"
                value="IAgree"
              />
              <input
                {...register("period", { required: true })}
                type="radio"
                value="completelyAgree"
              />
            </div>
            <div className="radioContainer">
              <label> I always know how to priortise my tasks.</label>
              <input
                {...register("priority", { required: true })}
                type="radio"
                value="completelyDisagree"
              />
              <input
                {...register("priority", { required: true })}
                type="radio"
                value="IDisagree"
              />
              <input
                {...register("priority", { required: true })}
                type="radio"
                value="neutral"
              />
              <input
                {...register("priority", { required: true })}
                type="radio"
                value="IAgree"
              />
              <input
                {...register("priority", { required: true })}
                type="radio"
                value="completelyAgree"
              />
            </div>
            <div className="radioContainer">
              <label>
                I like instant gratificaton and find it hard to wait.
              </label>
              <input
                {...register("gratification", { required: true })}
                type="radio"
                value="completelyDisagree"
              />
              <input
                {...register("gratification", { required: true })}
                type="radio"
                value="IDisagree"
              />
              <input
                {...register("gratification", { required: true })}
                type="radio"
                value="neutral"
              />
              <input
                {...register("gratification", { required: true })}
                type="radio"
                value="IAgree"
              />
              <input
                {...register("gratification", { required: true })}
                type="radio"
                value="completelyAgree"
              />
            </div>
            <div className="radioContainer">
              <label>
                I prefer to finish one task before moving on to another.
              </label>
              <input
                {...register("settled", { required: true })}
                type="radio"
                value="completelyDisagree"
              />
              <input
                {...register("settled", { required: true })}
                type="radio"
                value="IDisagree"
              />
              <input
                {...register("settled", { required: true })}
                type="radio"
                value="neutral"
              />
              <input
                {...register("settled", { required: true })}
                type="radio"
                value="IAgree"
              />
              <input
                {...register("settled", { required: true })}
                type="radio"
                value="completelyAgree"
              />
            </div>
            <div className="radioContainer">
              <label>
                I am always the one to arrive late or miss an appointment
              </label>
              <input
                {...register("appointment", { required: true })}
                type="radio"
                value="completelyDisagree"
              />
              <input
                {...register("appointment", { required: true })}
                type="radio"
                value="IDisagree"
              />
              <input
                {...register("appointment", { required: true })}
                type="radio"
                value="neutral"
              />
              <input
                {...register("appointment", { required: true })}
                type="radio"
                value="IAgree"
              />
              <input
                {...register("appointment", { required: true })}
                type="radio"
                value="completelyAgree"
              />
            </div>
            <div className="radioContainer">
              <label>I am more productive when when I'm busy.</label>
              <input
                {...register("productive", { required: true })}
                type="radio"
                value="completelyDisagree"
              />
              <input
                {...register("productive", { required: true })}
                type="radio"
                value="IDisagree"
              />
              <input
                {...register("productive", { required: true })}
                type="radio"
                value="neutral"
              />
              <input
                {...register("productive", { required: true })}
                type="radio"
                value="IAgree"
              />
              <input
                {...register("productive", { required: true })}
                type="radio"
                value="completelyAgree"
              />
            </div>
            <div className="radioContainer">
              <label>I tend to make decisions at the last minute.</label>
              <input
                {...register("decision", { required: true })}
                type="radio"
                value="completelyDisagree"
              />
              <input
                {...register("decision", { required: true })}
                type="radio"
                value="IDisagree"
              />
              <input
                {...register("decision", { required: true })}
                type="radio"
                value="neutral"
              />
              <input
                {...register("decision", { required: true })}
                type="radio"
                value="IAgree"
              />
              <input
                {...register("decision", { required: true })}
                type="radio"
                value="completelyAgree"
              />
            </div>
            <div className="radioContainer">
              <label>
                I focus on big picture more than details of the project.
              </label>
              <input
                {...register("biggerPicture", { required: true })}
                type="radio"
                value="completelyDisagree"
              />
              <input
                {...register("biggerPicture", { required: true })}
                type="radio"
                value="IDisagree"
              />
              <input
                {...register("biggerPicture", { required: true })}
                type="radio"
                value="neutral"
              />
              <input
                {...register("biggerPicture", { required: true })}
                type="radio"
                value="IAgree"
              />
              <input
                {...register("biggerPicture", { required: true })}
                type="radio"
                value="completelyAgree"
              />
            </div>
            <div className="radioContainer">
              <label>
                I work better when I can decide the deadline myself.
              </label>
              <input
                {...register("deadline", { required: true })}
                type="radio"
                value="completelyDisagree"
              />
              <input
                {...register("deadline", { required: true })}
                type="radio"
                value="IDisagree"
              />
              <input
                {...register("deadline", { required: true })}
                type="radio"
                value="neutral"
              />
              <input
                {...register("deadline", { required: true })}
                type="radio"
                value="IAgree"
              />
              <input
                {...register("deadline", { required: true })}
                type="radio"
                value="completelyAgree"
              />
            </div>
            <div className="openQContainer">
              <label>
                What do you think/hope better time management can help you
                achieve?
              </label>
              <div>
                <input
                  type="text"
                  placeholder="Your answer"
                  size="107"
                  {...register("openQuestion1", { required: false, min: 2 })}
                />
              </div>
            </div>
            <div className="openQContainer">
              <label>
                Please tell us (as many as possible) the advice/methods/tools
                you find useful to you in your time management?
              </label>
              <div>
                <input
                  type="text"
                  placeholder="Your answer"
                  size="107"
                  {...register("openQuestion2", { required: false, min: 2 })}
                />
              </div>
            </div>
            <div className="openQContainer">
              <label>
                Please tell us (as many as possible) the advice/methods/tools
                you find useless to you in your time management?
              </label>
              <div>
                <input
                  type="text"
                  placeholder="Your answer"
                  size="107"
                  {...register("openQuestion3", { required: false, min: 2 })}
                />
              </div>
            </div>
            <div className="quizFooter">
              <div className="quizButtonContainer"><input
                type="submit"
                disabled={!isValid}
                className="primaryButton"
              /></div>
            </div>
          </form>
        </div>
      </>
    );
  } else {
    return (
      <div>
        <div className="resultContainer">
          <div>
            <h2>Quiz Results</h2>
            <div className="resultBody">
              <div className="resultText">
                <h1>Your time management type:</h1>
                <h2>{result.name}</h2>
                <h3>What is like to be a {result.name}?</h3>
                <p>{result.content}</p>
                <hr></hr>
                <h1>Time management advice for:</h1>
                <h2>{result.name}</h2>
                <p>{result.advice}</p>
              </div>
              <div className="resultButtonContainer">
                <span className="resultSignUp"
                  onClick={() => setSignUpModal(true)}
                >
                  Sign up to learn more about your style
                </span> 
              </div>
            </div>
          </div>
          <div className="pieContainer">
            <div>
              <p>Explore how other people scored:</p>
            </div>
            <div className="pieChart">
              <PieChart
                data={[
                  { title: "Hyper Focus", value: 17, color: "#9AA5FD" },
                  { title: "Impulsive", value: 4, color: "#4C57A9" },
                  { title: "Big Picture", value: 13, color: "#E07A5F" },
                  { title: "Cliff Hanger", value: 13, color: "#F0BEB0" },
                  { title: "Hopper", value: 9, color: "#F9E3DD" },
                  { title: "Perfectionist", value: 44, color: "#EFEFFF" },
                ]}
                segmentsShift={(index) => (index === result.pie ? shiftSize : 0.5)}
                radius={50 - shiftSize}
                paddingAngle={1}
                startAngle={215}
                lineWidth={55}
                label={({ dataEntry }) =>
                  dataEntry.title +
                  ": " +
                  Math.round(dataEntry.percentage) +
                  "%"
                }
                labelPosition={73}
                labelStyle={(index) => ({
                  fill: index < 1 ? "white" : "#1b1b1f",
                  fontSize: "3px",
                  fontWeight: "700",
                  float: "left",
                  width: "30px",
                })}
              />
            </div>
          </div>
        </div>
        <ModalLog trigger={signUpModal} setTrigger={setSignUpModal}><SignUp /></ModalLog>
      </div>
      
    );
  }
}

export default Quiz;
