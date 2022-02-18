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
      <View style={styles.View_98_900} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2fdc/1028/f1a4140dc8b904b3d59efb8a3b0790c4"
        }}
        style={styles.ImageBackground_98_906}
      />
      <View style={styles.View_98_907}>
        <View style={styles.View_98_908} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4903/5b8d/8b494ed76c0b76253af621d9ae3d3539"
          }}
          style={styles.ImageBackground_98_909}
        />
        <View style={styles.View_98_910} />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/199f/f3e3/91a1349b0b439612c3a053b405181728"
        }}
        style={styles.ImageBackground_98_911}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2074/d381/feaee9a2cfbeb4a5e342db8f2af25114"
        }}
        style={styles.ImageBackground_98_912}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eba3/a9bf/edec5cd70cf2307698908a2953b9d641"
        }}
        style={styles.ImageBackground_98_913}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6850/9af8/1cc0a0b11f07d661698061e1a6a346da"
        }}
        style={styles.ImageBackground_98_914}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/13ee/8d87/f3bb6ac01abde3995a3ca97621187ab2"
        }}
        style={styles.ImageBackground_98_918}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1d51/3560/11aeea01ee1122d82a20be1c18bc7b40"
        }}
        style={styles.ImageBackground_98_923}
      />
      <View style={styles.View_98_924}>
        <View style={styles.View_98_925} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5fc9/6d3c/5df345deaf462347b28a41ca5a5fddf5"
          }}
          style={styles.ImageBackground_98_926}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/041c/a15c/9b0837988cbca49913dbb94fd55ca9b9"
          }}
          style={styles.ImageBackground_98_927}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b05e/3107/497dcd52b1e905762d5a15f4f4970fb2"
          }}
          style={styles.ImageBackground_98_928}
        />
      </View>
      <View style={styles.View_98_929}>
        <Text style={styles.Text_98_929}>
          Up to 70% OFF health &amp; wellness products
        </Text>
      </View>
      <View style={styles.View_98_930}>
        <Text style={styles.Text_98_930}>
          Mauris scelerisque justo non sodales elementum. Phasellus eros quam,
          aliquam id urna eget, sollicitudin faucibus nibh. Integer malesuada
          velit enim, nec congue elit aliquet eu. Aliquam ex odio, malesuada non
          erat sit amet, fermentum molestie nulla. Etiam eu nisl ac est
          venenatis aliquet ac nec quam. Maecenas lectus tellus, aliquet id sem
          quis, euismod semper sem. Pellentesque finibus, massa eu tempus
          convallis, dui justo tempus felis, eu tempor erat lacus sit amet quam.
          Phasellus finibus hendrerit lobortis. Vestibulum vehicula risus eu
          sapien aliquam lobortis. Nunc dictum nisi non nibh consectetur
          fermentum. Phasellus finibus hendrerit lobortis. Vestibulum vehicula
          risus eu sapien aliquam lobortis. Nunc dictum nisi non nibh
          consectetur fermentum.
        </Text>
      </View>
      <View style={styles.View_98_931}>
        <Text style={styles.Text_98_931}>Terms and coditions</Text>
      </View>
      <View style={styles.View_99_932} />
      <View style={styles.View_99_933} />
      <View style={styles.View_99_934}>
        <Text style={styles.Text_99_934}>Are you sure you want to Log Out</Text>
      </View>
      <View style={styles.View_99_937} />
      <View style={styles.View_99_938}>
        <Text style={styles.Text_99_938}>Yes</Text>
      </View>
      <View style={styles.View_99_939}>
        <Text style={styles.Text_99_939}>Cancel</Text>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("122%") },
  View_98_900: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("329%"),
    minHeight: hp("329%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-97%"),
    backgroundColor: "rgba(24, 67, 95, 1)"
  },
  ImageBackground_98_906: {
    flexGrow: 1,
    width: wp("33%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("121%")
  },
  View_98_907: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    top: hp("4%")
  },
  View_98_908: {
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
  ImageBackground_98_909: {
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
  View_98_910: {
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
  ImageBackground_98_911: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%")
  },
  ImageBackground_98_912: {
    width: wp("5%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_98_913: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_98_914: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%")
  },
  ImageBackground_98_918: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%")
  },
  ImageBackground_98_923: {
    width: wp("7%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_98_924: {
    width: wp("85%"),
    minWidth: wp("85%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("96%")
  },
  View_98_925: {
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
  ImageBackground_98_926: {
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
  ImageBackground_98_927: {
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
  ImageBackground_98_928: {
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
  View_98_929: {
    width: wp("44%"),
    minWidth: wp("44%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("99%"),
    justifyContent: "flex-start"
  },
  Text_98_929: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 15,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_98_930: {
    width: wp("85%"),
    minWidth: wp("85%"),
    minHeight: hp("58%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("26%"),
    justifyContent: "flex-start"
  },
  Text_98_930: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.100000023841858,
    textTransform: "none"
  },
  View_98_931: {
    width: wp("77%"),
    minWidth: wp("77%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("20%"),
    justifyContent: "flex-start"
  },
  Text_98_931: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_99_932: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("122%"),
    minHeight: hp("122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.5799999833106995
  },
  View_99_933: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("31%"),
    minHeight: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("41%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_99_934: {
    width: wp("70%"),
    minWidth: wp("70%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("45%"),
    justifyContent: "flex-start"
  },
  Text_99_934: {
    color: "rgba(20, 20, 20, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_99_937: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("56%"),
    backgroundColor: "rgba(252, 186, 120, 1)"
  },
  View_99_938: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    top: hp("58%"),
    justifyContent: "flex-start"
  },
  Text_99_938: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.72,
    textTransform: "none"
  },
  View_99_939: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("64%"),
    justifyContent: "flex-start"
  },
  Text_99_939: {
    color: "rgba(38, 170, 189, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})
const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
