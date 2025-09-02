import React from 'react';
import styles from './Profile.module.css';
import { FaPython, FaBrain, FaRobot } from 'react-icons/fa';
import avatar from './assets/avatar.jpg';

const Profile = () => {
  return (
    <div className={styles.profileContainer}>
      <div className={styles.card}>
        <div className={styles.header}>
          <img
            src={avatar}
            alt="Avatar của tôi"
            className={styles.avatar}
          />
          <h1 className={styles.title}>Đào Hải</h1>
          <p className={styles.subtitle}>AI & Machine Learning Engineer</p>
        </div>

        <h2 className={styles.sectionTitle}>About me</h2>
        <p>
          Tôi là một kỹ sư AI và Machine Learning với niềm đam mê sâu sắc trong việc xây dựng các mô hình thông minh.
          Chuyên môn của tôi bao gồm xử lý ngôn ngữ tự nhiên (NLP), thị giác máy tính và học sâu.
        </p>

        <h2 className={styles.sectionTitle}>Kỹ Năng</h2>
        <ul className={styles.skillList}>
          <li className={styles.skillItem}><FaPython />Python</li>
          <li className={styles.skillItem}><FaBrain />Machine Learning</li>
          <li className={styles.skillItem}><FaRobot />Deep Learning</li>
          <li className={styles.skillItem}>TensorFlow</li>
          <li className={styles.skillItem}>PyTorch</li>
          <li className={styles.skillItem}>Scikit-learn</li>
          <li className={styles.skillItem}>NLP</li>
          <li className={styles.skillItem}>Computer Vision</li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;