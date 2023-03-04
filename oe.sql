/*
 Navicat Premium Data Transfer

 Source Server         : kong
 Source Server Type    : MySQL
 Source Server Version : 80032
 Source Host           : localhost:3306
 Source Schema         : oe

 Target Server Type    : MySQL
 Target Server Version : 80032
 File Encoding         : 65001

 Date: 04/03/2023 16:21:21
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for cl
-- ----------------------------
DROP TABLE IF EXISTS `cl`;
CREATE TABLE `cl`  (
  `cl_id` int(0) NOT NULL AUTO_INCREMENT,
  `c_id` int(0) NULL DEFAULT NULL,
  `l_id` int(0) NULL DEFAULT NULL,
  PRIMARY KEY (`cl_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of cl
-- ----------------------------
INSERT INTO `cl` VALUES (1, 1, 1);
INSERT INTO `cl` VALUES (2, 1, 2);
INSERT INTO `cl` VALUES (3, 1, 3);

-- ----------------------------
-- Table structure for classes
-- ----------------------------
DROP TABLE IF EXISTS `classes`;
CREATE TABLE `classes`  (
  `c_id` int(0) NOT NULL AUTO_INCREMENT,
  `c_name` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`c_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 13 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of classes
-- ----------------------------
INSERT INTO `classes` VALUES (1, '2019级光电信息科学与工程班');
INSERT INTO `classes` VALUES (2, '2020级光电信息科学与工程班');
INSERT INTO `classes` VALUES (3, '2021级光电信息科学与工程班');
INSERT INTO `classes` VALUES (4, '2022级光电信息科学与工程班');
INSERT INTO `classes` VALUES (5, '2023级光电信息科学与工程班');
INSERT INTO `classes` VALUES (11, '2024光电信息科学与工程班');

-- ----------------------------
-- Table structure for el
-- ----------------------------
DROP TABLE IF EXISTS `el`;
CREATE TABLE `el`  (
  `el_id` int(0) NOT NULL AUTO_INCREMENT,
  `e_id` int(0) NULL DEFAULT NULL,
  `l_id` int(0) NULL DEFAULT NULL,
  PRIMARY KEY (`el_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of el
-- ----------------------------
INSERT INTO `el` VALUES (1, 1, 1);
INSERT INTO `el` VALUES (3, 1, 2);

-- ----------------------------
-- Table structure for es
-- ----------------------------
DROP TABLE IF EXISTS `es`;
CREATE TABLE `es`  (
  `es_id` int(0) NOT NULL AUTO_INCREMENT,
  `e_id` int(0) NULL DEFAULT NULL,
  `s_no` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `es_grade` int(0) NULL DEFAULT NULL,
  PRIMARY KEY (`es_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of es
-- ----------------------------

-- ----------------------------
-- Table structure for experiments
-- ----------------------------
DROP TABLE IF EXISTS `experiments`;
CREATE TABLE `experiments`  (
  `e_id` int(0) NOT NULL AUTO_INCREMENT,
  `e_name` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `e_content` varchar(5000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `e_files` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `r_id` int(0) NULL DEFAULT NULL,
  PRIMARY KEY (`e_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of experiments
-- ----------------------------
INSERT INTO `experiments` VALUES (1, '双缝干涉实验', '在量子力学里，双缝实验，或称双狭缝实验（英语：Double-slit experiment）是一种展示光子或电子等微观物体的波动性与粒子性的实验。双缝实验是一种“双路径实验”。在双路径实验里，微观物体可以同时通过两条路径或通过其中任意一条路径，从初始点抵达最终点。这两条路径的程差促使描述微观物体物理行为的量子态发生相移，因此产生干涉现象。另一种常见的双路径实验是马赫-曾德尔干涉仪实验。\n\n双缝实验的基本仪器设置很简单，如图所示，将像镭射一类的相干光束照射到一块刻有两条狭缝的不透明板，通过狭缝的光束会抵达照相胶片或某种探测屏，从记录于照相胶片或某种探测屏的辐照度数据，可以分析光的物理性质。光的波动性使得通过两条狭缝的光束互相干涉，形成了显示于探测屏的明亮条纹和暗淡条纹相间的图样，明亮条纹是相长干涉区域，暗淡条纹是相消干涉区域，这就是双缝实验著名的干涉图样。[1]:38-60\n\n在经典力学里，双缝实验又称为“杨氏双缝实验”，或“杨氏实验”、“杨氏双狭缝干涉实验”，专门演示光波的干涉行为，是因物理学者托马斯·杨而命名。假若光束是以粒子的形式从光源移动至探测屏，抵达探测屏任意位置的粒子数目，应该等于之前通过左狭缝的粒子数量与之前通过右狭缝的粒子数量的总和。根据定域性原理（principle of locality），关闭左狭缝不应该影响粒子通过右狭缝的行为，反之亦然，[2]:7因此，在探测屏的任意位置，两条狭缝都不关闭的辐照度应该等于只关闭左狭缝后的辐照度与只关闭右狭缝后的辐照度的总和。但是，当两条狭缝都不关闭时，结果并不是这样，探测屏的某些区域会比较明亮，某些区域会比较暗淡，这种图样只能用光波动说的相长干涉和相消干涉来解释，而不是用光微粒说的简单数量相加法。[1]:38-60\n\n双缝实验也可以用来检试像中子、原子等微观物体的物理行为，虽然使用的仪器不同，但仍旧会得到类似的结果。每一个单独微观物体都离散地撞击到探测屏，撞击位置无法被预测，演示出整个过程的概率性，累积很多撞击事件后，总体又显示出干涉图样，演示微观物体的波动性。[1]:38-60[2]:8-9\n\n2013年，一个检试分子物理行为的双缝实验成功演示出含有810个原子、质量约为10,000amu的分子也具有波动性。[3]\n\n理查德·费曼在著作《费曼物理学讲义》里表示，双缝实验所展示出的量子现象不可能、绝对不可能以任何经典方式来解释，它包含了量子力学的核心思想。事实上，它包含了量子力学唯一的奥秘[1]:39。透过双缝实验，可以观察到量子世界的奥秘。', '', 1);

-- ----------------------------
-- Table structure for lessons
-- ----------------------------
DROP TABLE IF EXISTS `lessons`;
CREATE TABLE `lessons`  (
  `l_id` int(0) NOT NULL AUTO_INCREMENT,
  `l_name` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`l_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of lessons
-- ----------------------------
INSERT INTO `lessons` VALUES (1, '光电综合实验');
INSERT INTO `lessons` VALUES (2, '光电信息实验');
INSERT INTO `lessons` VALUES (3, '激光实验');
INSERT INTO `lessons` VALUES (4, '光纤实验');
INSERT INTO `lessons` VALUES (5, '光通信实验');
INSERT INTO `lessons` VALUES (6, '光电信息实验');

-- ----------------------------
-- Table structure for lg
-- ----------------------------
DROP TABLE IF EXISTS `lg`;
CREATE TABLE `lg`  (
  `ls_id` int(0) NOT NULL AUTO_INCREMENT,
  `l_id` int(0) NULL DEFAULT NULL,
  `s_no` int(0) NULL DEFAULT NULL,
  `ls_grade` int(0) NULL DEFAULT NULL,
  PRIMARY KEY (`ls_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of lg
-- ----------------------------

-- ----------------------------
-- Table structure for ls
-- ----------------------------
DROP TABLE IF EXISTS `ls`;
CREATE TABLE `ls`  (
  `ls_id` int(0) NOT NULL AUTO_INCREMENT,
  `l_id` int(0) NULL DEFAULT NULL,
  `s_no` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`ls_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of ls
-- ----------------------------

-- ----------------------------
-- Table structure for questions
-- ----------------------------
DROP TABLE IF EXISTS `questions`;
CREATE TABLE `questions`  (
  `q_id` int(0) NOT NULL AUTO_INCREMENT,
  `q_content` varchar(5000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `e_id` int(0) NULL DEFAULT NULL,
  PRIMARY KEY (`q_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of questions
-- ----------------------------

-- ----------------------------
-- Table structure for rooms
-- ----------------------------
DROP TABLE IF EXISTS `rooms`;
CREATE TABLE `rooms`  (
  `r_id` int(0) NOT NULL AUTO_INCREMENT,
  `r_addr` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`r_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of rooms
-- ----------------------------
INSERT INTO `rooms` VALUES (1, '尚行楼101');
INSERT INTO `rooms` VALUES (2, '尚行楼102');
INSERT INTO `rooms` VALUES (3, '尚行楼103');
INSERT INTO `rooms` VALUES (4, '尚行楼104');

-- ----------------------------
-- Table structure for students
-- ----------------------------
DROP TABLE IF EXISTS `students`;
CREATE TABLE `students`  (
  `s_no` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `s_email` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `s_password` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `s_name` varchar(5) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `c_id` int(0) NULL DEFAULT NULL,
  PRIMARY KEY (`s_no`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of students
-- ----------------------------
INSERT INTO `students` VALUES ('19070501002', '1428390162@qq.com', '111111', '孔庆志', 1);
INSERT INTO `students` VALUES ('19070501007', '1428390162@qq.com', '111111', '王磊', 1);

-- ----------------------------
-- Table structure for teachers
-- ----------------------------
DROP TABLE IF EXISTS `teachers`;
CREATE TABLE `teachers`  (
  `t_no` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `t_password` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `t_name` varchar(5) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`t_no`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of teachers
-- ----------------------------

SET FOREIGN_KEY_CHECKS = 1;
