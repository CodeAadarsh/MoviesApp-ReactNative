import { View, Text, TouchableOpacity, ScrollView, Platform, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { MagnifyingGlassIcon} from 'react-native-heroicons/outline'
import TrendingMovies from '../components/trendingMovies';
import MovieList from '../components/movieList';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import Loading from '../components/loading';
import { styles } from '../theme';

const ios = Platform.OS === 'ios';

export default function HomeScreen() {

  const [trending, setTrending] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();


  useEffect(()=>{
    getTrendingMovies();
    getAllMovies();
    getTopRatedMovies();
  },[]);

  const getTrendingMovies = async ()=>{
    const response = await fetch("https://api.tvmaze.com/search/shows?q=all");
    const data = await response.json();
    if(data) setTrending(data);
    setLoading(false)
  }
  const getAllMovies = async ()=>{
    const response = await fetch("https://api.tvmaze.com/search/shows?q=all");
    const data = await response.json();
    if(data) setUpcoming(data);
    setLoading(false)
    console.log(data)
  }
  const getTopRatedMovies = async ()=>{
    const response = await fetch("https://api.tvmaze.com/search/shows?q=all");
    const data = await response.json();
    if(data) setTopRated(data);
    setLoading(false)
    console.log(data)
  }



  return (
    <View className="flex-1 " style={{backgroundColor:`#000`}}>
      {/* search bar */}
      <SafeAreaView className={ios? "-mb-2": "mb-3"}>
        <StatusBar style="light" />
        <View className="flex-row justify-between items-center mx-4">
        <Image source={require(`../assets/android/mipmap-xxhdpi/icon.png`)}
            style={{height:35,width:35}}/>
          
          <Text 
            className="text-white text-3xl font-bold">
              <Text 
            className=" text-3xl font-bold" style={{color:"#D22F26"}}>no</Text>Movies
          </Text>
          {/* <TouchableOpacity onPress={()=> navigation.navigate('Search')}>
            <MagnifyingGlassIcon size="30" strokeWidth={2} color="white" />
          </TouchableOpacity> */}
          <View></View>
        </View>
      </SafeAreaView>
      {
        loading? (
          <Loading />
        ):(
          <ScrollView 
            showsVerticalScrollIndicator={false} 
            contentContainerStyle={{paddingBottom: 10}}
          >

            { trending.length>0 && <TrendingMovies data={trending} /> }
            { upcoming.length>0 && <MovieList title="Upcoming" data={upcoming} hideSeeAll={true} /> }
            { topRated.length>0 && <MovieList title="Top Rated" data={topRated} hideSeeAll={true} /> }

          </ScrollView>
        )
      }
      
  </View>
      

   
  )
}
