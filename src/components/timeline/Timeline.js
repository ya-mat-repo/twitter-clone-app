import React, { useState, useEffect } from 'react';
import Post from './Post';
import './Timeline.css';
import TweetBox from './TweetBox';
import db from '../../firebase';
import {
  collection,
  // getDocs,
  onSnapshot,
  query,
  orderBy,
} from 'firebase/firestore';
import FlipMove from 'react-flip-move';

const Timeline = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const postData = collection(db, 'posts');
    const q = query(postData, orderBy('timestamp', 'desc'));

    // リアルタイムでデータを取得
    onSnapshot(q, (querySnapshot) => {
      setPosts(querySnapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <div className="timeline">
      {/* Header */}
      <div className="timeline--header">
        <h2>ホーム</h2>
      </div>
      {/* TweetBox */}
      <TweetBox />

      {/* Post */}
      <FlipMove>
        {!!posts.length > 0 &&
          posts.map((post, index) => (
            <Post
              displayName={post.displayName}
              userName={post.userName}
              verified={post.verified}
              text={post.text}
              avatar={post.avatar}
              image={post.image}
              key={index}
            />
          ))}
      </FlipMove>
    </div>
  );
};

export default Timeline;
