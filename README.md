# Lab 8 - Starter
Sarayu Pai
Check Your Understanding 
1) I would fit my automated tests within a Github action that runs whenever code is pushed in my Recipe project development pipeline. Doing so will prevent pull requests from being merged unless all tests pass, confirming that the new changes did not break the code. 
2) No, I would not use end to end test check if a function is returning correct output. 
3) No, I would not use a unit test to test the "message" feature of a messaging application because messaging involves the interaction of multiple components (users write and send messages to other users) while unit testing can only handle testing one component at a time which is not a gurantee that they work together. 
4) Yes, I would use a unit test to test the "max message length" feature of a messaging application because the feature is likely to be an isolated component that checks the length of the message and prevents/allows sending.  

