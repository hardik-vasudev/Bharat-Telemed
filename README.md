# Bharat TeleMed
Bharat TeleMed is a Health Kiosk which enables patients to connect to any doctor in any part of the world remotely,recieve diagnosis in their own language.


                    
          


Welcome to Bharat-Telemed A Health kiosk deigned for TeleConsutlation
## Aproach 
![WhatsApp Image 2025-02-15 at 18 28 41_d1c08669](https://github.com/user-attachments/assets/8a16e7e6-9179-4f48-9908-607fa5e5be08)

Bharat TeleMed is built using a modern technology stack to provide a seamless and efficient telemedicine experience. The frontend is developed with React 18 and styled using Tailwind CSS, ensuring a responsive and intuitive user interface. The backend is powered by Flask, which enables fast and scalable API responses. For data storage, we have integrated MongoDB/MySQL, allowing efficient retrieval and management of patient records. The system incorporates Machine Learning models built with TensorFlow/PyTorch to enhance AI-driven disease prediction based on symptoms. Secure telemedicine consultations are facilitated through Jitsi Meet, providing a robust video conferencing solution for remote doctor-patient interactions. Additionally, Docker is utilized for containerization, making deployment and scaling more efficient.
## Features  

### 🏥 AI-Powered Chatbot  
- 🗣️ Supports health-related queries in the patient’s native language.  
- 📊 Collects patient data and predicts diseases based on symptoms.  
- 🎨 Provides an easy-to-use AI-enabled user interface.  

### 📡 Telemedicine and Remote Consultation  
- 🌍 Allows doctors to remotely connect with a patient's kiosk from anywhere.  
- 🎙️ AI-enabled live captions assist both doctors and patients during teleconsultation.  
- 🏥 Generates diagnosis plans based on available nearby health resources.  

### 🔍 Disease Prediction and Data Analysis  
- 🩺 Uses IoT sensors for automated health data collection.  
- ⚡ Leverages edge computing for real-time data processing.  
- ☁️ Utilizes cloud-based analytics and machine learning for pattern identification.  
- 📊 Supports data visualization for easy disease prediction.  

### 🏥 Integration with Medical Equipment  
- 📡 Collects real-time patient health data from IoT-enabled medical devices.  
- 🏥 Manual data input by nurses for additional patient records.  
## **Installation** 
###  Prerequisites

Ensure you have the following installed:

   - Node.js 

   - Python 

   - MongoDB
 ### Set Up 
 #### 1. Clone the repository
```bash
git clone https://github.com/hardik-vasudev/bharat-telemed.git
cd bharat-telemed
```
#### 2. Install Dependencies
  - Frontend  
    ```bash 
      cd frontend 
      npm install 
    ```
   - Backend   
     ```bash 
        cd backend
        pip install requirement.txt
     ```
   
#### 3. Start the application 
    
   - Backend   
     ```bash
        uvicorn main:app --host 0.0.0.0 --port 8000
     ```
   - Frontend
     ```bash 
        npm run dev
     ```

## 🚀 Usage  

### 🧑‍⚕️ For Patients  
1. Visit the telemedicine kiosk.  
2. Input symptoms via the AI chatbot.  
3. Receive AI-assisted preliminary diagnosis and recommendations.  
4. Connect with a remote doctor for further consultation.  

### 👨‍⚕️ For Doctors  
1. Access patient data remotely through a secure portal.  
2. Conduct live teleconsultations with AI-generated insights.  
3. Utilize AI-assisted diagnosis plans based on nearby medical resources.  

### 🏥 For Healthcare Providers  
1. Monitor patient health data through IoT-enabled devices.  
2. Leverage AI-driven analytics for better decision-making.  
3. Enhance healthcare accessibility, especially in underserved regions.

## 🤝 Contributing  
Contributions are welcome! Feel free to submit a pull request or open an issue.   
