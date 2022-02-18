import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_110_5} />
      <View style={styles.View_110_44}>
        <Text style={styles.Text_110_44}>Upload Photo</Text>
      </View>
      <View style={styles.View_110_75}>
        <Text style={styles.Text_110_75}>Edit</Text>
      </View>
      <View style={styles.View_110_109}>
        <Text style={styles.Text_110_109}>Edit</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/99c4/1ba8/aadd7e67258fb7717a1635af1136ea7c"
        }}
        style={styles.ImageBackground_110_76}
      />
      <View style={styles.View_110_77}>
        <Text style={styles.Text_110_77}>Personal information</Text>
      </View>
      <View style={styles.View_110_17}>
        <Text style={styles.Text_110_17}>Dog-specific information</Text>
      </View>
      <View style={styles.View_110_78} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6db0/eb9f/919bbfbcb04c536938aaba5bc43127e6"
        }}
        style={styles.ImageBackground_110_79}
      />
      <View style={styles.View_110_80} />
      <View style={styles.View_110_81} />
      <View style={styles.View_110_82} />
      <View style={styles.View_110_83} />
      <View style={styles.View_110_84} />
      <View style={styles.View_110_85} />
      <View style={styles.View_110_86} />
      <View style={styles.View_110_87}>
        <Text style={styles.Text_110_87}>Full name</Text>
      </View>
      <View style={styles.View_110_88}>
        <Text style={styles.Text_110_88}>youremail@gmail.com</Text>
      </View>
      <View style={styles.View_110_89}>
        <Text style={styles.Text_110_89}>Full name:</Text>
      </View>
      <View style={styles.View_110_90}>
        <Text style={styles.Text_110_90}>Email:</Text>
      </View>
      <View style={styles.View_110_91}>
        <Text style={styles.Text_110_91}>Phone number:</Text>
      </View>
      <View style={styles.View_110_92}>
        <Text style={styles.Text_110_92}>Address:</Text>
      </View>
      <View style={styles.View_110_93}>
        <Text style={styles.Text_110_93}>855.432.4310</Text>
      </View>
      <View style={styles.View_110_94}>
        <Text style={styles.Text_110_94}>Street address</Text>
      </View>
      <View style={styles.View_110_95}>
        <Text style={styles.Text_110_95}>City</Text>
      </View>
      <View style={styles.View_110_96}>
        <Text style={styles.Text_110_96}>ZIP Code</Text>
      </View>
      <View style={styles.View_110_97}>
        <Text style={styles.Text_110_97}>State</Text>
      </View>
      <View style={styles.View_110_100} />
      <View style={styles.View_110_101} />
      <View style={styles.View_110_102} />
      <View style={styles.View_110_103}>
        <Text style={styles.Text_110_103}>Dog name</Text>
      </View>
      <View style={styles.View_110_104}>
        <Text style={styles.Text_110_104}>Dog age</Text>
      </View>
      <View style={styles.View_110_105}>
        <Text style={styles.Text_110_105}>Dog breed</Text>
      </View>
      <View style={styles.View_110_106}>
        <Text style={styles.Text_110_106}>Name:</Text>
      </View>
      <View style={styles.View_110_107}>
        <Text style={styles.Text_110_107}>Age:</Text>
      </View>
      <View style={styles.View_110_108}>
        <Text style={styles.Text_110_108}>Breed: </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6674/56cd/33b1a3e266e7c2185cacd15a4b9764c0"
        }}
        style={styles.ImageBackground_110_110}
      />
      <View style={styles.View_110_196}>
        <View style={styles.View_110_197} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5fc9/6d3c/5df345deaf462347b28a41ca5a5fddf5"
          }}
          style={styles.ImageBackground_110_198}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/041c/a15c/9b0837988cbca49913dbb94fd55ca9b9"
          }}
          style={styles.ImageBackground_110_199}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b05e/3107/497dcd52b1e905762d5a15f4f4970fb2"
          }}
          style={styles.ImageBackground_110_200}
        />
      </View>
      <View style={styles.View_110_201}>
        <Text style={styles.Text_110_201}>
          Up to 70% OFF health &amp; wellness products
        </Text>
      </View>
      <View style={styles.View_110_46}>
        <View style={styles.View_110_47} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4903/5b8d/8b494ed76c0b76253af621d9ae3d3539"
          }}
          style={styles.ImageBackground_110_48}
        />
        <View style={styles.View_110_49} />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/477c/a00c/bda4e04ee137ece06fe8b7812ccd5ace"
        }}
        style={styles.ImageBackground_110_50}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2074/d381/feaee9a2cfbeb4a5e342db8f2af25114"
        }}
        style={styles.ImageBackground_110_51}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d119/8263/2d09a59abbfa6ad00271fbe6773dd639"
        }}
        style={styles.ImageBackground_110_52}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/81d4/77ff/72fd745b82070316b0e7fe76f58325b2"
        }}
        style={styles.ImageBackground_110_53}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd2d/cc1e/ee7b60b2098457cb2dbe757614a5bd8f"
        }}
        style={styles.ImageBackground_110_57}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/063f/9bdc/8fcd76cb95dae4abf1bca5b3492d4888"
        }}
        style={styles.ImageBackground_110_62}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(24, 67, 95, 1)" },
  View_2: { height: hp("242%") },
  View_110_5: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("224%"),
    minHeight: hp("224%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_110_44: {
    width: wp("26%"),
    minWidth: wp("26%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("39%"),
    justifyContent: "flex-start"
  },
  Text_110_44: {
    color: "rgba(38, 170, 189, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_110_75: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("143%"),
    justifyContent: "flex-start"
  },
  Text_110_75: {
    color: "rgba(38, 170, 189, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_110_109: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("210%"),
    justifyContent: "flex-start"
  },
  Text_110_109: {
    color: "rgba(38, 170, 189, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_110_76: {
    width: wp("85%"),
    minWidth: wp("85%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("152%")
  },
  View_110_77: {
    width: wp("77%"),
    minWidth: wp("77%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("46%"),
    justifyContent: "flex-start"
  },
  Text_110_77: {
    color: "rgba(20, 20, 20, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_110_17: {
    width: wp("77%"),
    minWidth: wp("77%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("157%"),
    justifyContent: "flex-start"
  },
  Text_110_17: {
    color: "rgba(20, 20, 20, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_110_78: {
    width: wp("26%"),
    minWidth: wp("26%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("22%"),
    backgroundColor: "rgba(243, 245, 248, 1)",
    borderColor: "rgba(225, 227, 231, 1)",
    borderWidth: 1
  },
  ImageBackground_110_79: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("27%")
  },
  View_110_80: {
    width: wp("85%"),
    minWidth: wp("85%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("57%"),
    backgroundColor: "rgba(243, 245, 248, 1)",
    borderColor: "rgba(225, 227, 231, 1)",
    borderWidth: 1
  },
  View_110_81: {
    width: wp("85%"),
    minWidth: wp("85%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("71%"),
    backgroundColor: "rgba(243, 245, 248, 1)",
    borderColor: "rgba(225, 227, 231, 1)",
    borderWidth: 1
  },
  View_110_82: {
    width: wp("85%"),
    minWidth: wp("85%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("85%"),
    backgroundColor: "rgba(243, 245, 248, 1)",
    borderColor: "rgba(225, 227, 231, 1)",
    borderWidth: 1
  },
  View_110_83: {
    width: wp("85%"),
    minWidth: wp("85%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("99%"),
    backgroundColor: "rgba(243, 245, 248, 1)",
    borderColor: "rgba(225, 227, 231, 1)",
    borderWidth: 1
  },
  View_110_84: {
    width: wp("85%"),
    minWidth: wp("85%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("109%"),
    backgroundColor: "rgba(243, 245, 248, 1)",
    borderColor: "rgba(225, 227, 231, 1)",
    borderWidth: 1
  },
  View_110_85: {
    width: wp("85%"),
    minWidth: wp("85%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("119%"),
    backgroundColor: "rgba(243, 245, 248, 1)",
    borderColor: "rgba(225, 227, 231, 1)",
    borderWidth: 1
  },
  View_110_86: {
    width: wp("85%"),
    minWidth: wp("85%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("129%"),
    backgroundColor: "rgba(243, 245, 248, 1)",
    borderColor: "rgba(225, 227, 231, 1)",
    borderWidth: 1
  },
  View_110_87: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("60%"),
    justifyContent: "flex-start"
  },
  Text_110_87: {
    color: "rgba(125, 128, 136, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_110_88: {
    width: wp("39%"),
    minWidth: wp("39%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("73%"),
    justifyContent: "flex-start"
  },
  Text_110_88: {
    color: "rgba(125, 128, 136, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_110_89: {
    width: wp("80%"),
    minWidth: wp("80%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("53%"),
    justifyContent: "flex-start"
  },
  Text_110_89: {
    color: "rgba(20, 20, 20, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.100000023841858,
    textTransform: "none"
  },
  View_110_90: {
    width: wp("80%"),
    minWidth: wp("80%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("67%"),
    justifyContent: "flex-start"
  },
  Text_110_90: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.100000023841858,
    textTransform: "none"
  },
  View_110_91: {
    width: wp("80%"),
    minWidth: wp("80%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("80%"),
    justifyContent: "flex-start"
  },
  Text_110_91: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.100000023841858,
    textTransform: "none"
  },
  View_110_92: {
    width: wp("80%"),
    minWidth: wp("80%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("94%"),
    justifyContent: "flex-start"
  },
  Text_110_92: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.100000023841858,
    textTransform: "none"
  },
  View_110_93: {
    width: wp("83%"),
    minWidth: wp("83%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("87%"),
    justifyContent: "flex-start"
  },
  Text_110_93: {
    color: "rgba(125, 128, 136, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.100000023841858,
    textTransform: "none"
  },
  View_110_94: {
    width: wp("83%"),
    minWidth: wp("83%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("101%"),
    justifyContent: "flex-start"
  },
  Text_110_94: {
    color: "rgba(125, 128, 136, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.100000023841858,
    textTransform: "none"
  },
  View_110_95: {
    width: wp("83%"),
    minWidth: wp("83%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("111%"),
    justifyContent: "flex-start"
  },
  Text_110_95: {
    color: "rgba(125, 128, 136, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.100000023841858,
    textTransform: "none"
  },
  View_110_96: {
    width: wp("83%"),
    minWidth: wp("83%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("121%"),
    justifyContent: "flex-start"
  },
  Text_110_96: {
    color: "rgba(125, 128, 136, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.100000023841858,
    textTransform: "none"
  },
  View_110_97: {
    width: wp("83%"),
    minWidth: wp("83%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("131%"),
    justifyContent: "flex-start"
  },
  Text_110_97: {
    color: "rgba(125, 128, 136, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.100000023841858,
    textTransform: "none"
  },
  View_110_100: {
    width: wp("85%"),
    minWidth: wp("85%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("170%"),
    backgroundColor: "rgba(243, 245, 248, 1)",
    borderColor: "rgba(225, 227, 231, 1)",
    borderWidth: 1
  },
  View_110_101: {
    width: wp("85%"),
    minWidth: wp("85%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("183%"),
    backgroundColor: "rgba(243, 245, 248, 1)",
    borderColor: "rgba(225, 227, 231, 1)",
    borderWidth: 1
  },
  View_110_102: {
    width: wp("85%"),
    minWidth: wp("85%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("196%"),
    backgroundColor: "rgba(243, 245, 248, 1)",
    borderColor: "rgba(225, 227, 231, 1)",
    borderWidth: 1
  },
  View_110_103: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("173%"),
    justifyContent: "flex-start"
  },
  Text_110_103: {
    color: "rgba(125, 128, 136, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_110_104: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("186%"),
    justifyContent: "flex-start"
  },
  Text_110_104: {
    color: "rgba(125, 128, 136, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_110_105: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("199%"),
    justifyContent: "flex-start"
  },
  Text_110_105: {
    color: "rgba(125, 128, 136, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_110_106: {
    width: wp("80%"),
    minWidth: wp("80%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("166%"),
    justifyContent: "flex-start"
  },
  Text_110_106: {
    color: "rgba(20, 20, 20, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.100000023841858,
    textTransform: "none"
  },
  View_110_107: {
    width: wp("80%"),
    minWidth: wp("80%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("179%"),
    justifyContent: "flex-start"
  },
  Text_110_107: {
    color: "rgba(20, 20, 20, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.100000023841858,
    textTransform: "none"
  },
  View_110_108: {
    width: wp("80%"),
    minWidth: wp("80%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("193%"),
    justifyContent: "flex-start"
  },
  Text_110_108: {
    color: "rgba(20, 20, 20, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.100000023841858,
    textTransform: "none"
  },
  ImageBackground_110_110: {
    flexGrow: 1,
    width: wp("33%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("239%")
  },
  View_110_196: {
    width: wp("85%"),
    minWidth: wp("85%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("220%")
  },
  View_110_197: {
    width: wp("85%"),
    minWidth: wp("85%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_110_198: {
    width: wp("85%"),
    minWidth: wp("85%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_110_199: {
    width: wp("101%"),
    minWidth: wp("101%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-12%"),
    top: hp("-2%"),
    resizeMode: "cover"
  },
  ImageBackground_110_200: {
    width: wp("197%"),
    minWidth: wp("197%"),
    height: hp("39%"),
    minHeight: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-70%"),
    top: hp("-8%"),
    resizeMode: "cover"
  },
  View_110_201: {
    width: wp("44%"),
    minWidth: wp("44%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("222%"),
    justifyContent: "flex-start"
  },
  Text_110_201: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 15,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_110_46: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%"),
    top: hp("3%")
  },
  View_110_47: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1
  },
  ImageBackground_110_48: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%")
  },
  View_110_49: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_110_50: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%")
  },
  ImageBackground_110_51: {
    width: wp("5%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_110_52: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_110_53: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%")
  },
  ImageBackground_110_57: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%")
  },
  ImageBackground_110_62: {
    width: wp("7%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
