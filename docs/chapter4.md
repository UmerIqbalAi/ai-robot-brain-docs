---
id: deployment-jetson
title: Deployment on Real Robots (Jetson Orin)
sidebar_label: Deployment (Jetson)
---

# Chapter 4: Deployment on Real Robots (Jetson Orin)

Once a robot is trained in Isaac Sim, the next step is deployment. This is where the AI-Robot Brain becomes real.

## 1. Deploying Models to Jetson  
The Jetson Orin platform executes AI tasks such as:

- Vision  
- Audio  
- Sensor fusion  
- Motion planning  
- Real-time decisions  

Using:

- TensorRT  
- CUDA / cuDNN  
- ROS2 + Isaac ROS  
- NVIDIA Container Runtime  

## 2. Connecting Sensors  
Typical sensors include:

- RGB cameras  
- Depth cameras  
- LiDAR  
- Ultrasonic sensors  
- Wheel encoders  
- IMU  

Isaac ROS helps connect, optimize, and process all these sensors efficiently.

## 3. Real-Time Navigation  
Robots use:

- Nav2 with GPU acceleration  
- SLAM for indoor mapping  
- cuMotion for path optimization  
- Collision avoidance algorithms  

## 4. Manipulator Control  
Robotic arms use:

- cuRobo  
- ROS2 arm drivers  
- Joint trajectory controllers  

Tasks include:

- Picking and placing objects  
- Sorting items  
- Loading/unloading packages  
- Assembly tasks  

## 5. Monitoring & Logging  
You can monitor robot behavior using:

- Isaac Sight  
- ROS2 dashboards  
- Jetson metrics  
- System logs  

Deployment turns your virtual robot model into a fully functional real-world agent.
