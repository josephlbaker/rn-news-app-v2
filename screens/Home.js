import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Colors from '../constants/colors';

const Home = props => {
  const [articles, setArticles] = useState([]);

  const fetchArticles = () => {
    let url = 'https://content.guardianapis.com/sections?q=us-news&api-key=4f19bf65-5936-4f82-968d-654adcbf3af6';
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setArticles(data.response.results);
      })
      .catch(error => {
        console.log('There has been a problem with your fetch operation: ' + error.message);
        throw error;
      });
  }

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <View style={styles.screen}>
      {articles.map((article) => (
        <Text key={article.id}>
          {article.webTitle}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  }
});

export default Home;
