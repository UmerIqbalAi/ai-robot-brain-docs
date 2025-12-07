---
id: core-architecture
title: Core Architecture of NVIDIA Isaac
sidebar_label: Core Architecture
---

# Chapter 2: Core Architecture of NVIDIA Isaac

Isaac is built around a modular architecture that connects perception, mapping, planning, and control. Every part of the robot’s brain is constructed as a node that communicates through a graph.

### **Key Components**

## 1. Perception Layer  
This layer helps the robot understand what is happening around it.

- 2D & 3D object detection  
- Human pose estimation  
- Semantic segmentation  
- Depth and distance measurement  

Tools used: **Isaac ROS Perception**, **DeepStream**, **TensorRT**.

## 2. Mapping & Localization Layer  
The robot builds a map of its surroundings and constantly updates its position.

- SLAM (Simultaneous Localization and Mapping)  
- VSLAM (Visual SLAM)  
- Occupancy grid maps  
- LiDAR-based mapping  

Tools: **Isaac ROS VSLAM**, **NVBlox**.

## 3. Planning Layer  
The robot calculates *how to move* from point A to point B.

- Path planning  
- Motion optimization  
- Collision avoidance  
- Task-level planning  

Tools: **Isaac SDK planners**, **cuMotion**, **Nav2 acceleration**.

## 4. Control Layer  
This is where commands are translated into physical motion.

- Arm control  
- Wheel control  
- Drone control  
- PID controllers  
- Joint-level control  

## 5. Hardware Layer  
AI models run on powerful NVIDIA chips:

- Jetson Orin Nano  
- Jetson AGX Orin  
- CUDA cores + Tensor cores  
- GPU-accelerated robotics libraries  

Isaac is designed to allow your AI-Robot Brain to work at high speed — with real-time perception, planning, and action.
