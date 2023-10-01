# PCMM
Creating a People centred mining modernization application.
##Desription
The project is about different aspects of a mining namely: minerals mined, yeilds, safety incidents and contact personnel. The structure of the project is as follows: 
-landing page : gives an overvies of modernization on mining.
-Safety incidents page : displays statistics of safety incidents and allows user to filter production yield for
  all mines in a given year interval.
-A mine dropdown selection: allows user to select a mine from a list.
-Each mine page has the following fetures: 
  * A map that shows pins of all safety incidents with metadata.
  * An imput form that captures longitude and latitude metadata upon click of a pin location on the map.
  * A dropdown list to select incidents and severity as additional metadate to a pin location.
  * A create button that adds a pin location on the map and creates a new record in incidents table with the fields 
    provided in the form.
  * A delete button removes an added pin location and removes a corresponding record from the incidents table.
  * A line graph displaying the yield against year of all minerals in a mine. 
  * A table showing related mine details.
  * A table shwoing details of a contact person of the respective mine.

##Visuals
1.landing page
  ![image](https://github.com/Kefuoe/PCMM/assets/66252154/0754360e-8dc1-474d-854c-09494684be2b)
2. Safety incidents and production yields filter.
   ![image](https://github.com/Kefuoe/PCMM/assets/66252154/7de4dce2-41fd-4fc3-b414-55dc4213aac8)
3. Mine map and production yeilds.
   ![image](https://github.com/Kefuoe/PCMM/assets/66252154/7a41e15e-5bb8-454b-aea3-25a2a2838085)
4. Mine details and corresponding contact person details
   ![image](https://github.com/Kefuoe/PCMM/assets/66252154/4e968f75-4d39-41ef-beea-aad680569cb1)

##Usage 
The are two repositories that needs to be cloned from github:
1.The server repository is Kefuoe/PMCC, the client server is a monolink in this repository.
2.The client repository is in Kefuoe/client. 

##Build With
Frameworks and libraries:
Angular 16
Bootstrap
Nodejs
Postgres Database
