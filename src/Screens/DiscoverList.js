import React from 'react';
import { View, Text, FlatList } from "react-native";
import Discover from '../Screens/Discover'

function DiscoverList({navigation}) {
    const DiscoverList = [
      {
        name: "Discover Dry is January Actually Improve Your Health",
        profile: require("../../assets/profile.jpg"),
        read: "4 min read",
        author: "Shubash Chandrah",
        id: "1",
        image: require("../../assets/first.jpg"),
        text: "Lorem ipsum dolor sit amet, sit decore tritani definitionem no, sit ut sapientem interpretaris, diceret fastidii vituperatoribus nec ei. Ius eros probo cu, mel nullam appetere ut. No dicta consequat prodesset eos. Ex erant forensibus sadipscing vel, dico nominati eu nec, eum an insolens principes democritum. Ullum explicari mei ea, an est illud voluptua prodesset, ex per vivendum nominati. Dictas tractatos adipiscing per ad, est no probo quidam intellegam, mei graece voluptatum comprehensam id. Eu nec cibo aliquando adipiscing, usu regione maluisset euripidis an. His pertinax consequuntur ad. Has te soleat graeci. "
      },
      {
        name: "How To Seem Like You Always Have Your Spot Together",
        profil: require("../../assets/profile.jpg"),
        read: "4 min read",
        author: "Johny Vino",
        id: "2",
        image: require("../../assets/second.jpg"),
        text: "Lorem ipsum dolor sit amet, sit decore tritani definitionem no, sit ut sapientem interpretaris, diceret fastidii vituperatoribus nec ei. Ius eros probo cu, mel nullam appetere ut. No dicta consequat prodesset eos. Ex erant forensibus sadipscing vel, dico nominati eu nec, eum an insolens principes democritum. Ullum explicari mei ea, an est illud voluptua prodesset, ex per vivendum nominati. Dictas tractatos adipiscing per ad, est no probo quidam intellegam, mei graece voluptatum comprehensam id. Eu nec cibo aliquando adipiscing, usu regione maluisset euripidis an. His pertinax consequuntur ad. Has te soleat graec"
      },
      {
        name: "Discover Dry is January Actually Improve Your Health",
        profile: require("../../assets/profile.jpg"),
        read: "4 min read",
        author: "Masudah Rah",
        id: "3",
        image: require("../../assets/third.jpg"),
        text: "Lorem ipsum dolor sit amet, sit decore tritani definitionem no, sit ut sapientem interpretaris, diceret fastidii vituperatoribus nec ei. Ius eros probo cu, mel nullam appetere ut. No dicta consequat prodesset eos. Ex erant forensibus sadipscing vel, dico nominati eu nec, eum an insolens principes democritum. Ullum explicari mei ea, an est illud voluptua prodesset, ex per vivendum nominati. Dictas tractatos adipiscing per ad, est no probo quidam intellegam, mei graece voluptatum comprehensam id. Eu nec cibo aliquando adipiscing, usu regione maluisset euripidis an. His pertinax consequuntur ad. Has te soleat graec"
      },
      {
        name: "You Do Hire A Designer To Make Something. You Hire Them. ",
        profile: require("../../assets/profile.jpg"),
        read: "4 min read",
        author: "Shubash Chandrah",
        id: "4",
        image: require("../../assets/fourth.jpg"),
        text: "Lorem ipsum dolor sit amet, sit decore tritani definitionem no, sit ut sapientem interpretaris, diceret fastidii vituperatoribus nec ei. Ius eros probo cu, mel nullam appetere ut. No dicta consequat prodesset eos. Ex erant forensibus sadipscing vel, dico nominati eu nec, eum an insolens principes democritum. Ullum explicari mei ea, an est illud voluptua prodesset, ex per vivendum nominati. Dictas tractatos adipiscing per ad, est no probo quidam intellegam, mei graece voluptatum comprehensam id. Eu nec cibo aliquando adipiscing, usu regione maluisset euripidis an. His pertinax consequuntur ad. Has te soleat graeci"
      },
     
    ];
  
    return (
      <FlatList
        data={DiscoverList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <View>
              <Discover
                name={item.name}
                age={item.profile}
                location={item.read}
                type={item.author}
                image={item.image}
                text={item.text}
                navigation={navigation}
              />
            </View>
          );
        }}
      />
    );
  }
  
  export default DiscoverList;
  
