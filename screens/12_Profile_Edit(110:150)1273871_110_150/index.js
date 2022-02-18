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
      <View style={styles.View_110_151} />
      <View style={styles.View_110_202}>
        <View style={styles.View_110_203} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5fc9/6d3c/5df345deaf462347b28a41ca5a5fddf5"
          }}
          style={styles.ImageBackground_110_204}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/041c/a15c/9b0837988cbca49913dbb94fd55ca9b9"
          }}
          style={styles.ImageBackground_110_205}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b05e/3107/497dcd52b1e905762d5a15f4f4970fb2"
          }}
          style={styles.ImageBackground_110_206}
        />
      </View>
      <View style={styles.View_110_207}>
        <Text style={styles.Text_110_207}>
          Up to 70% OFF health &amp; wellness products
        </Text>
      </View>
      <View style={styles.View_110_153}>
        <Text style={styles.Text_110_153}>Upload Photo</Text>
      </View>
      <View style={styles.View_110_155}>
        <Text style={styles.Text_110_155}>Edit</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/99c4/1ba8/aadd7e67258fb7717a1635af1136ea7c"
        }}
        style={styles.ImageBackground_110_156}
      />
      <View style={styles.View_110_157}>
        <Text style={styles.Text_110_157}>Personal information</Text>
      </View>
      <View style={styles.View_110_158}>
        <Text style={styles.Text_110_158}>Dog-specific information</Text>
      </View>
      <View style={styles.View_110_159} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6db0/eb9f/919bbfbcb04c536938aaba5bc43127e6"
        }}
        style={styles.ImageBackground_110_160}
      />
      <View style={styles.View_110_161} />
      <View style={styles.View_110_162} />
      <View style={styles.View_110_163} />
      <View style={styles.View_110_164} />
      <View style={styles.View_110_165} />
      <View style={styles.View_110_166} />
      <View style={styles.View_110_167} />
      <View style={styles.View_110_168}>
        <Text style={styles.Text_110_168}>Full name</Text>
      </View>
      <View style={styles.View_110_169}>
        <Text style={styles.Text_110_169}>youremail@gmail.com</Text>
      </View>
      <View style={styles.View_110_170}>
        <Text style={styles.Text_110_170}>Full name:</Text>
      </View>
      <View style={styles.View_110_171}>
        <Text style={styles.Text_110_171}>Email:</Text>
      </View>
      <View style={styles.View_110_172}>
        <Text style={styles.Text_110_172}>Phone number:</Text>
      </View>
      <View style={styles.View_110_173}>
        <Text style={styles.Text_110_173}>Address:</Text>
      </View>
      <View style={styles.View_110_195}>
        <Text style={styles.Text_110_195}>0. 000.000.0000</Text>
      </View>
      <View style={styles.View_110_175}>
        <Text style={styles.Text_110_175}>Street address</Text>
      </View>
      <View style={styles.View_110_176}>
        <Text style={styles.Text_110_176}>City</Text>
      </View>
      <View style={styles.View_110_177}>
        <Text style={styles.Text_110_177}>ZIP Code</Text>
      </View>
      <View style={styles.View_110_178}>
        <Text style={styles.Text_110_178}>State</Text>
      </View>
      <View style={styles.View_110_179} />
      <View style={styles.View_110_180} />
      <View style={styles.View_110_181} />
      <View style={styles.View_110_182}>
        <Text style={styles.Text_110_182}>Dog name</Text>
      </View>
      <View style={styles.View_110_183}>
        <Text style={styles.Text_110_183}>Dog age</Text>
      </View>
      <View style={styles.View_110_184}>
        <Text style={styles.Text_110_184}>Dog breed</Text>
      </View>
      <View style={styles.View_110_185}>
        <Text style={styles.Text_110_185}>Name:</Text>
      </View>
      <View style={styles.View_110_186}>
        <Text style={styles.Text_110_186}>Age:</Text>
      </View>
      <View style={styles.View_110_187}>
        <Text style={styles.Text_110_187}>Breed: </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6674/56cd/33b1a3e266e7c2185cacd15a4b9764c0"
        }}
        style={styles.ImageBackground_110_188}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/16d1/465c/36814276bc8482bbdcec9a7c3fb157f4"
        }}
        style={styles.ImageBackground_110_18}
      />
      <View style={styles.View_110_39} />
      <View style={styles.View_110_40}>
        <Text style={styles.Text_110_40}>Save Changes</Text>
      </View>
      <View style={styles.View_110_208}>
        <View style={styles.View_110_209} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4903/5b8d/8b494ed76c0b76253af621d9ae3d3539"
          }}
          style={styles.ImageBackground_110_210}
        />
        <View style={styles.View_110_211} />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/477c/a00c/bda4e04ee137ece06fe8b7812ccd5ace"
        }}
        style={styles.ImageBackground_110_212}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2074/d381/feaee9a2cfbeb4a5e342db8f2af25114"
        }}
        style={styles.ImageBackground_110_213}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d119/8263/2d09a59abbfa6ad00271fbe6773dd639"
        }}
        style={styles.ImageBackground_110_214}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/81d4/77ff/72fd745b82070316b0e7fe76f58325b2"
        }}
        style={styles.ImageBackground_110_215}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd2d/cc1e/ee7b60b2098457cb2dbe757614a5bd8f"
        }}
        style={styles.ImageBackground_110_219}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/063f/9bdc/8fcd76cb95dae4abf1bca5b3492d4888"
        }}
        style={styles.ImageBackground_110_224}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(24, 67, 95, 1)" },
  View_2: { height: hp("242%") },
  View_110_151: {
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
  View_110_202: {
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
  View_110_203: {
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
  ImageBackground_110_204: {
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
  ImageBackground_110_205: {
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
  ImageBackground_110_206: {
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
  View_110_207: {
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
  Text_110_207: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 15,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_110_153: {
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
  Text_110_153: {
    color: "rgba(38, 170, 189, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_110_155: {
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
  Text_110_155: {
    color: "rgba(38, 170, 189, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_110_156: {
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
  View_110_157: {
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
  Text_110_157: {
    color: "rgba(20, 20, 20, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_110_158: {
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
  Text_110_158: {
    color: "rgba(20, 20, 20, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_110_159: {
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
  ImageBackground_110_160: {
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
  View_110_161: {
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
    borderColor: "rgba(24, 67, 95, 1)",
    borderWidth: 1
  },
  View_110_162: {
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
    borderColor: "rgba(24, 67, 95, 1)",
    borderWidth: 1
  },
  View_110_163: {
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
    borderColor: "rgba(24, 67, 95, 1)",
    borderWidth: 1
  },
  View_110_164: {
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
    borderColor: "rgba(24, 67, 95, 1)",
    borderWidth: 1
  },
  View_110_165: {
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
    borderColor: "rgba(24, 67, 95, 1)",
    borderWidth: 1
  },
  View_110_166: {
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
    borderColor: "rgba(24, 67, 95, 1)",
    borderWidth: 1
  },
  View_110_167: {
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
    borderColor: "rgba(24, 67, 95, 1)",
    borderWidth: 1
  },
  View_110_168: {
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
  Text_110_168: {
    color: "rgba(26, 26, 26, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_110_169: {
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
  Text_110_169: {
    color: "rgba(26, 26, 26, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_110_170: {
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
  Text_110_170: {
    color: "rgba(20, 20, 20, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.100000023841858,
    textTransform: "none"
  },
  View_110_171: {
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
  Text_110_171: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.100000023841858,
    textTransform: "none"
  },
  View_110_172: {
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
  Text_110_172: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.100000023841858,
    textTransform: "none"
  },
  View_110_173: {
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
  Text_110_173: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.100000023841858,
    textTransform: "none"
  },
  View_110_195: {
    width: wp("83%"),
    minWidth: wp("83%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("87%"),
    justifyContent: "flex-start"
  },
  Text_110_195: {
    color: "rgba(26, 26, 26, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.100000023841858,
    textTransform: "none"
  },
  View_110_175: {
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
  Text_110_175: {
    color: "rgba(26, 26, 26, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.100000023841858,
    textTransform: "none"
  },
  View_110_176: {
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
  Text_110_176: {
    color: "rgba(26, 26, 26, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.100000023841858,
    textTransform: "none"
  },
  View_110_177: {
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
  Text_110_177: {
    color: "rgba(26, 26, 26, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.100000023841858,
    textTransform: "none"
  },
  View_110_178: {
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
  Text_110_178: {
    color: "rgba(26, 26, 26, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.100000023841858,
    textTransform: "none"
  },
  View_110_179: {
    width: wp("85%"),
    minWidth: wp("85%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("169%"),
    backgroundColor: "rgba(243, 245, 248, 1)",
    borderColor: "rgba(225, 227, 231, 1)",
    borderWidth: 1
  },
  View_110_180: {
    width: wp("85%"),
    minWidth: wp("85%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("182%"),
    backgroundColor: "rgba(243, 245, 248, 1)",
    borderColor: "rgba(225, 227, 231, 1)",
    borderWidth: 1
  },
  View_110_181: {
    width: wp("85%"),
    minWidth: wp("85%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("195%"),
    backgroundColor: "rgba(243, 245, 248, 1)",
    borderColor: "rgba(225, 227, 231, 1)",
    borderWidth: 1
  },
  View_110_182: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("172%"),
    justifyContent: "flex-start"
  },
  Text_110_182: {
    color: "rgba(125, 128, 136, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_110_183: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("185%"),
    justifyContent: "flex-start"
  },
  Text_110_183: {
    color: "rgba(125, 128, 136, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_110_184: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("198%"),
    justifyContent: "flex-start"
  },
  Text_110_184: {
    color: "rgba(125, 128, 136, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_110_185: {
    width: wp("80%"),
    minWidth: wp("80%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("165%"),
    justifyContent: "flex-start"
  },
  Text_110_185: {
    color: "rgba(20, 20, 20, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.100000023841858,
    textTransform: "none"
  },
  View_110_186: {
    width: wp("80%"),
    minWidth: wp("80%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("178%"),
    justifyContent: "flex-start"
  },
  Text_110_186: {
    color: "rgba(20, 20, 20, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.100000023841858,
    textTransform: "none"
  },
  View_110_187: {
    width: wp("80%"),
    minWidth: wp("80%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("192%"),
    justifyContent: "flex-start"
  },
  Text_110_187: {
    color: "rgba(20, 20, 20, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.100000023841858,
    textTransform: "none"
  },
  ImageBackground_110_188: {
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
  ImageBackground_110_18: {
    width: wp("85%"),
    minWidth: wp("85%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("148%")
  },
  View_110_39: {
    width: wp("85%"),
    minWidth: wp("85%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("140%"),
    backgroundColor: "rgba(252, 186, 120, 1)"
  },
  View_110_40: {
    width: wp("30%"),
    minWidth: wp("30%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("143%"),
    justifyContent: "flex-start"
  },
  Text_110_40: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.72,
    textTransform: "none"
  },
  View_110_208: {
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
  View_110_209: {
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
  ImageBackground_110_210: {
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
  View_110_211: {
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
  ImageBackground_110_212: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%")
  },
  ImageBackground_110_213: {
    width: wp("5%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_110_214: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_110_215: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%")
  },
  ImageBackground_110_219: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%")
  },
  ImageBackground_110_224: {
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
