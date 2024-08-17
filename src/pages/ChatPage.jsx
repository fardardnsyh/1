import React, { useState , useRef , useEffect } from 'react';
import { NavBar, Footer, Message } from '../components/molecules';
import { IconButton, InputBox } from '../components/atoms';
import faqData from '../data/faq.json';

const ChatPage = () => {
    const [messages, setMessages] = useState([]);
    const [userInput, setUserInput] = useState("");
    const messageContainerRef = useRef(null);
    const lastMessageRef = useRef(null);

    useEffect(() => {
        if (lastMessageRef.current) {
            lastMessageRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages]);

    const handleSendMessages = () => {
        if (userInput.trim()) {
            const userMessage = {
                name: "You",
                content: userInput,
                time: new Date().toLocaleTimeString(),
                position: "right"
            };

            const updatedMessages = [...messages, userMessage];
            setMessages(updatedMessages);
            setUserInput('');

            let selectReply = [];
            if(['hi' , 'Hi', 'welcome'].some(keyWord => userInput.toLocaleLowerCase().includes(keyWord))){
                selectReply = faqData.filter(message => message.id === 0);
            }else if(['part time' , 'full time', ].some(keyWord => userInput.toLocaleLowerCase().includes(keyWord))){
                selectReply = faqData.filter(message => message.id === 1);
            }else if(['delivery mode' , 'distance learning', ].some(keyWord => userInput.toLocaleLowerCase().includes(keyWord))){
                selectReply = faqData.filter(message => message.id === 2);
            }else if(['ays of the week'].some(keyWord => userInput.toLocaleLowerCase().includes(keyWord))){
                selectReply = faqData.filter(message => message.id === 3);
            }else if(['types of degrees' , 'degree types'].some(keyWord => userInput.toLocaleLowerCase().includes(keyWord))){
                selectReply = faqData.filter(message => message.id === 4);
            }else if(['entry qualifications' , 'minimum qualifications', 'qualifications'].some(keyWord => userInput.toLocaleLowerCase().includes(keyWord))){
                selectReply = faqData.filter(message => message.id === 5);
            }else if(['z score affect admission' , 'z score'].some(keyWord => userInput.toLocaleLowerCase().includes(keyWord))){
                selectReply = faqData.filter(message => message.id === 6);
            }else if(['selected tests', 'selection test', 'tests'].some(keyWord => userInput.toLocaleLowerCase().includes(keyWord))){
                selectReply = faqData.filter(message => message.id === 7);
            }else if(['selection test for admission'].some(keyWord => userInput.toLocaleLowerCase().includes(keyWord))){
                selectReply = faqData.filter(message => message.id === 8);
            }else if (['online or onsite', 'online', 'onsite'].some(keyWord => userInput.toLocaleLowerCase().includes(keyWord))) {
                selectReply = faqData.filter(message => message.id === 9);
            }else if (['problem to register', 'register problem', 'registration problem'].some(keyWord => userInput.toLocaleLowerCase().includes(keyWord))) {
                selectReply = faqData.filter(message => message.id === 10);
            }else if (['study for two degrees', 'two degrees', 'study multiple degrees'].some(keyWord => userInput.toLocaleLowerCase().includes(keyWord))) {
                selectReply = faqData.filter(message => message.id === 11);
            }else if (['mechatronics degree', 'mechatronics', 'study mechatronics'].some(keyWord => userInput.toLocaleLowerCase().includes(keyWord))) {
                selectReply = faqData.filter(message => message.id === 12);
            }else if (['conflicts between degrees', 'degree conflicts', 'degree clashes'].some(keyWord => userInput.toLocaleLowerCase().includes(keyWord))) {
                selectReply = faqData.filter(message => message.id === 13);
            }else if (['industrial training', 'internship', 'job training'].some(keyWord => userInput.toLocaleLowerCase().includes(keyWord))) {
                selectReply = faqData.filter(message => message.id === 14);
            }else if (['opportunities for industrial training', 'industrial training opportunities', 'job training opportunities'].some(keyWord => userInput.toLocaleLowerCase().includes(keyWord))) {
                selectReply = faqData.filter(message => message.id === 15);
            }else if (['practical tests', 'practical exams', 'lab exams'].some(keyWord => userInput.toLocaleLowerCase().includes(keyWord))) {
                selectReply = faqData.filter(message => message.id === 16);
            }else if (['come to Colombo', 'come for practical', 'practical location'].some(keyWord => userInput.toLocaleLowerCase().includes(keyWord))) {
                selectReply = faqData.filter(message => message.id === 17);
            }else if (['exam held only in the Colombo center'].some(keyWord => userInput.toLocaleLowerCase().includes(keyWord))) {
                selectReply = faqData.filter(message => message.id === 18);
            }else if (['exam locations', 'exam centers', 'registered centers'].some(keyWord => userInput.toLocaleLowerCase().includes(keyWord))) {
                selectReply = faqData.filter(message => message.id === 19);
            }else if (['IESL membership after graduating', 'graduation IESL membership', 'IESL membership after degree'].some(keyWord => userInput.toLocaleLowerCase().includes(keyWord))) {
                selectReply = faqData.filter(message => message.id === 20);
            }else if (['Can I get an IESL membership through A/L results S3'].some(keyWord => userInput.toLocaleLowerCase().includes(keyWord))) {
                selectReply = faqData.filter(message => message.id === 21);
            }else if (['IESL membership while doing a degree', 'IESL membership during degree', 'degree IESL membership'].some(keyWord => userInput.toLocaleLowerCase().includes(keyWord))) {
                selectReply = faqData.filter(message => message.id === 22);
            }else if (['IESL membership after completing foundation course', 'foundation course IESL membership', 'IESL membership after foundation'].some(keyWord => userInput.toLocaleLowerCase().includes(keyWord))) {
                selectReply = faqData.filter(message => message.id === 23);
            }else if (['bring for registration', 'registration documents', 'documents for registration'].some(keyWord => userInput.toLocaleLowerCase().includes(keyWord))) {
                selectReply = faqData.filter(message => message.id === 24);
            }else if (['choose subject while registering', 'subject selection during registration', 'subject advice during registration'].some(keyWord => userInput.toLocaleLowerCase().includes(keyWord))) {
                selectReply = faqData.filter(message => message.id === 25);
            }else if (['study while on the job', 'study while working', 'degree while working'].some(keyWord => userInput.toLocaleLowerCase().includes(keyWord))) {
                selectReply = faqData.filter(message => message.id === 26);
            }else if (['registration fee', 'fee for registration', 'cost of registration'].some(keyWord => userInput.toLocaleLowerCase().includes(keyWord))) {
                selectReply = faqData.filter(message => message.id === 27);
            }else if (['total cost of degree', 'cost of degree', 'degree expenses','total cost'].some(keyWord => userInput.toLocaleLowerCase().includes(keyWord))) {
                selectReply = faqData.filter(message => message.id === 28);
            }else if (['email verification during registration', 'email verification problem', 'email issue during registration'].some(keyWord => userInput.toLocaleLowerCase().includes(keyWord))) {
                selectReply = faqData.filter(message => message.id === 29);
            }else if (['degree admission notification', 'admission notification', 'degree selection notification'].some(keyWord => userInput.toLocaleLowerCase().includes(keyWord))) {
                selectReply = faqData.filter(message => message.id === 30);
            } else {
                selectReply = [{ id: -1, message: "Sorry, I can't understand you. Can you send that message again?" }];
            }

            setTimeout(() => {
                if (selectReply.length > 0) {
                  const automatedReplies = selectReply.map(reply => {
                    let messageText = reply.message;
                    return {
                      position: 'left',
                      name: 'ChatBot',
                      time: new Date().toLocaleTimeString(),
                      content: messageText,
                    };
                  });
                  const finalMessages = [...updatedMessages, ...automatedReplies];
                  setMessages(finalMessages);
                }
              }, 1000);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSendMessages();
        }
    };

    return (
        <div className='z-30 w-full'>
            <NavBar />
            <div className='flex items-center justify-center h-[90vh] bg-none'>
                <div className='flex flex-col z-50 px-3 h-[60vh] w-1/2 rounded-lg'>
                    <div ref={messageContainerRef} className='w-full h-[50vh] mt-5 overflow-y-auto overflow-x-hidden'>
                        {messages.length > 0 && messages.map((msg, index) => (
                            <Message 
                                key={index}
                                name={msg.name}
                                content={msg.content}
                                position={msg.position}
                                ref={index === messages.length - 1 ? lastMessageRef : null}
                            />
                        ))}
                    </div>
                    <div className='flex items-end justify-center w-full h-[8vh] p-5'>
                        <div className='flex items-center justify-center w-full gap-5'>
                            <InputBox 
                                style="
                                    w-full
                                    h-[40px]
                                    rounded-md
                                    outline-none
                                    px-3
                                    py-2
                                "
                                placeholder="Type your message here..."
                                value={userInput}
                                onChangeFunc={(e) => setUserInput(e.target.value)}
                                keyPress={handleKeyPress} 
                            />
                            <IconButton 
                                icon={
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                                    </svg>
                                }
                                style="
                                    bg-green-500
                                    p-2
                                    h-[40px]
                                    rounded-md
                                    hover:bg-green-400
                                "
                                onClickFunc={handleSendMessages}
                            />
                        </div>
                    </div>
                </div>
                <div className='absolute bg-slate-200 h-[60vh] w-1/2 rounded-lg z-30 opacity-65'></div>
            </div>
            <div className='fixed bottom-0 left-0 w-full'>
                <Footer />
            </div>
        </div>
    )
}

export default ChatPage;
