import Search from '@mui/icons-material/Search';
import React from 'react';
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from 'react-twitter-embed';
import './Widgets.css';

const Widgets = () => {
  return (
    <div className="widgets">
      <div className="widgets--input">
        <Search className="widgets--searchIcon" />
        <input type="text" placeholder="キーワード検索" />
      </div>
      <div className="widgets--widgetContainer">
        <h2>いまどうしてる？</h2>

        {/* ライブラリを追加・追記 */}
        <TwitterTweetEmbed tweetId="1545242518694121472" />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="ya_matsuoka"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url="https://twitter.com/ya_matsuoka"
          options={{ text: '#React.js勉強中', via: 'ya_matsuoka' }}
        />
      </div>
    </div>
  );
};

export default Widgets;
