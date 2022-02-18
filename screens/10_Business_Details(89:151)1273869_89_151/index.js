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
      <View style={styles.View_89_152} />
      <View style={styles.View_89_170}>
        <View style={styles.View_89_171} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4903/5b8d/8b494ed76c0b76253af621d9ae3d3539"
          }}
          style={styles.ImageBackground_89_172}
        />
        <View style={styles.View_89_173} />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2fdc/1028/f1a4140dc8b904b3d59efb8a3b0790c4"
        }}
        style={styles.ImageBackground_89_199}
      />
      <View style={styles.View_89_214}>
        <View style={styles.View_89_215} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ab0d/7ec5/1a943f33c2352be59ef60c91656e6f99"
          }}
          style={styles.ImageBackground_89_216}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2074/d381/feaee9a2cfbeb4a5e342db8f2af25114"
        }}
        style={styles.ImageBackground_89_219}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d119/8263/2d09a59abbfa6ad00271fbe6773dd639"
        }}
        style={styles.ImageBackground_89_220}
      />
      <View style={styles.View_89_221}>
        <Text style={styles.Text_89_221}>Animal Clinic</Text>
      </View>
      <View style={styles.View_89_222}>
        <Text style={styles.Text_89_222}>Veterinary Clinics, New York</Text>
      </View>
      <View style={styles.View_89_230}>
        <Text style={styles.Text_89_230}>Address: </Text>
      </View>
      <View style={styles.View_89_233}>
        <Text style={styles.Text_89_233}>Hours of operation:</Text>
      </View>
      <View style={styles.View_89_236}>
        <Text style={styles.Text_89_236}>Phone number:</Text>
      </View>
      <View style={styles.View_89_231}>
        <Text style={styles.Text_89_231}>
          110 Chester St Brooklyn, NY 11212, USA
        </Text>
      </View>
      <View style={styles.View_89_234}>
        <Text style={styles.Text_89_234}>Monday - Friday: 07AM - 08PM</Text>
      </View>
      <View style={styles.View_90_249}>
        <Text style={styles.Text_90_249}>
          Mauris scelerisque justo non sodales elementum. Phasellus eros quam,
          aliquam id urna eget, sollicitudin faucibus nibh. Integer malesuada
          velit enim, nec congue elit aliquet eu. Aliquam ex odio, malesuada non
          erat sit amet, fermentum molestie nulla. Etiam eu nisl ac est
          venenatis aliquet ac nec quam. Maecenas lectus tellus, aliquet id sem
          quis, euismod semper sem. Pellentesque finibus, massa eu tempus
          convallis, dui justo tempus felis, eu tempor erat lacus sit amet quam.
          Phasellus finibus hendrerit lobortis. Vestibulum vehicula risus eu
          sapien aliquam lobortis. Nunc dictum nisi non nibh consectetur
          fermentum.
        </Text>
      </View>
      <View style={styles.View_89_237}>
        <Text style={styles.Text_89_237}>855.432.4310</Text>
      </View>
      <View style={styles.View_89_235}>
        <Text style={styles.Text_89_235}>Weekend: 07AM - 02PM</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8199/b6ca/7974ea536036eefc85c97ba782b7846a"
        }}
        style={styles.ImageBackground_89_244}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc83/de49/4ca5ef49183bf93c7482487debe2a121"
        }}
        style={styles.ImageBackground_89_245}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3659/febf/d8090e1947976677ec23d818122fedd4"
        }}
        style={styles.ImageBackground_90_265}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6850/9af8/1cc0a0b11f07d661698061e1a6a346da"
        }}
        style={styles.ImageBackground_90_272}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/13ee/8d87/f3bb6ac01abde3995a3ca97621187ab2"
        }}
        style={styles.ImageBackground_90_276}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1d51/3560/11aeea01ee1122d82a20be1c18bc7b40"
        }}
        style={styles.ImageBackground_90_281}
      />
      <View style={styles.View_90_282}>
        <View style={styles.View_90_283} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5fc9/6d3c/5df345deaf462347b28a41ca5a5fddf5"
          }}
          style={styles.ImageBackground_90_284}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/041c/a15c/9b0837988cbca49913dbb94fd55ca9b9"
          }}
          style={styles.ImageBackground_95_286}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b05e/3107/497dcd52b1e905762d5a15f4f4970fb2"
          }}
          style={styles.ImageBackground_95_287}
        />
      </View>
      <View style={styles.View_95_285}>
        <Text style={styles.Text_95_285}>
          Up to 70% OFF health &amp; wellness products
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/06ee/156c/45a899b807827b9882cb3d09c724e8f6"
        }}
        style={styles.ImageBackground_95_288}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/199f/f3e3/91a1349b0b439612c3a053b405181728"
        }}
        style={styles.ImageBackground_89_188}
      />
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("174%") },
  View_89_152: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("329%"),
    minHeight: hp("329%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-1%"),
    backgroundColor: "rgba(24, 67, 95, 1)"
  },
  View_89_170: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%"),
    top: hp("4%")
  },
  View_89_171: {
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
  ImageBackground_89_172: {
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
  View_89_173: {
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
  ImageBackground_89_199: {
    flexGrow: 1,
    width: wp("33%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("172%")
  },
  View_89_214: {
    width: wp("85%"),
    minWidth: wp("85%"),
    height: hp("29%"),
    minHeight: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("19%")
  },
  View_89_215: {
    width: wp("85%"),
    minWidth: wp("85%"),
    height: hp("29%"),
    minHeight: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_89_216: {
    width: wp("85%"),
    minWidth: wp("85%"),
    height: hp("29%"),
    minHeight: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_89_219: {
    width: wp("5%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_89_220: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_89_221: {
    width: wp("58%"),
    minWidth: wp("58%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("50%"),
    justifyContent: "flex-start"
  },
  Text_89_221: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_89_222: {
    width: wp("45%"),
    minWidth: wp("45%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("54%"),
    justifyContent: "flex-start"
  },
  Text_89_222: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_89_230: {
    width: wp("80%"),
    minWidth: wp("80%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("65%"),
    justifyContent: "flex-start"
  },
  Text_89_230: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.100000023841858,
    textTransform: "none"
  },
  View_89_233: {
    width: wp("80%"),
    minWidth: wp("80%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("74%"),
    justifyContent: "flex-start"
  },
  Text_89_233: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.100000023841858,
    textTransform: "none"
  },
  View_89_236: {
    width: wp("80%"),
    minWidth: wp("80%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("86%"),
    justifyContent: "flex-start"
  },
  Text_89_236: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.100000023841858,
    textTransform: "none"
  },
  View_89_231: {
    width: wp("83%"),
    minWidth: wp("83%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("68%"),
    justifyContent: "flex-start"
  },
  Text_89_231: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.100000023841858,
    textTransform: "none"
  },
  View_89_234: {
    width: wp("83%"),
    minWidth: wp("83%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("77%"),
    justifyContent: "flex-start"
  },
  Text_89_234: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.100000023841858,
    textTransform: "none"
  },
  View_90_249: {
    width: wp("85%"),
    minWidth: wp("85%"),
    minHeight: hp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("99%"),
    justifyContent: "flex-start"
  },
  Text_90_249: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.100000023841858,
    textTransform: "none"
  },
  View_89_237: {
    width: wp("83%"),
    minWidth: wp("83%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("89%"),
    justifyContent: "flex-start"
  },
  Text_89_237: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.100000023841858,
    textTransform: "none"
  },
  View_89_235: {
    width: wp("83%"),
    minWidth: wp("83%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("80%"),
    justifyContent: "flex-start"
  },
  Text_89_235: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.100000023841858,
    textTransform: "none"
  },
  ImageBackground_89_244: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("62%")
  },
  ImageBackground_89_245: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("96%")
  },
  ImageBackground_90_265: {
    width: wp("19%"),
    height: hp("1%"),
    top: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_90_272: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%")
  },
  ImageBackground_90_276: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%")
  },
  ImageBackground_90_281: {
    width: wp("7%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_90_282: {
    width: wp("85%"),
    minWidth: wp("85%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("148%")
  },
  View_90_283: {
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
  ImageBackground_90_284: {
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
  ImageBackground_95_286: {
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
  ImageBackground_95_287: {
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
  View_95_285: {
    width: wp("44%"),
    minWidth: wp("44%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("151%"),
    justifyContent: "flex-start"
  },
  Text_95_285: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 15,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_95_288: {
    width: wp("19%"),
    height: hp("2%"),
    top: hp("58%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_89_188: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
