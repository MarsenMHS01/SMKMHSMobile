import { View, Text, Image,TouchableOpacity, } from 'react-native'
import React from 'react'

const Home = ({ navigation }) => {
  return (
    <View>
      <View style={{
        height: 52,
        backgroundColor: '#EA3535',
        marginHorizontal: 16,
        borderRadius: 99,
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 16,
      }}>
        <Image
        source={require('../image/tentang.png')}
        style={{
          width: 140,
          height: 32,
        }}/>
        <Image
        source={require('../image/Frame.png')}
        style={{
          width: 20,
          height: 20,
        }}/>
      </View>
      <Text style={{
        marginTop: 32,
        marginLeft: 16,
        fontSize: 14,
        color: '#FA4343',
      }}>Selamat Datang di</Text>
      <Text style={{
        marginTop: 4,
        marginLeft: 16,
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black',
      }}>KANTIN MULTISTUDI</Text>
      <Text style={{
        marginTop: 32,
        marginLeft: 16,
        fontSize: 16,
        color: 'black',
      }}>Menu Makanan</Text>
      
      <View style={{
        flexDirection: 'row',
        marginTop: 12,
        padding: 16,
        flex: 1,
        justifyContent: 'space-between'
      }}>
      <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
      <Image
        source={require('../image/Rectangle5.png')}
        style={{
          width: 190,
          height: 168,
        }}/>
        </TouchableOpacity>
        
        <Image
        source={require('../image/Rectangle6.png')}
        style={{
          width: 190,
          height: 168,
        }}/>

        </View>
        <View style={{
          flexDirection: 'row',
          flex: 0,
          paddingLeft: 16,
          paddingRight: 16,
          marginTop: 162,
        }}>
            <Text style={{
                
                fontWeight: 'bold',
                color: 'black',
            }}>Tela-tela</Text>
           <Text style={{
            fontWeight: 'bold',
            color: 'black',
            marginLeft: 140,
            }}>Bakso Kuah</Text>
            </View> 
            <View style={{
          flexDirection: 'row',
          flex: 0,
          paddingLeft: 16,
          paddingRight: 16,
        }}>
            <Text style={{
                marginTop: 7,
                fontWeight: 'bold',
                color: 'red',
            }}>Rp.5000</Text>
            <Text style={{
                marginTop: 7,
                fontWeight: 'bold',
                color: 'red',
                marginLeft: 142,
            }}>Rp.7000</Text>
            </View>
            <Text style={{
        marginTop: 32,
        marginLeft: 16,
        fontSize: 16,
        color: 'black',
      }}>Menu Minuman</Text>
      
      <View style={{
        flexDirection: 'row',
        marginTop: 12,
        padding: 16,
        flex: 1,
        justifyContent: 'space-between'
      }}>
      
      <Image
        source={require('../image/Rectangle7.png')}
        style={{
          width: 190,
          height: 168,
        }}/>
        
        <Image
        source={require('../image/Rectangle8.png')}
        style={{
          width: 190,
          height: 168,
        }}/>
        
        </View>
        <View style={{
          flexDirection: 'row',
          flex: 0,
          paddingLeft: 16,
          paddingRight: 16,
          marginTop: 162,
        }}>
            <Text style={{
                
                fontWeight: 'bold',
                color: 'black',
            }}>Coca-cola</Text>
           <Text style={{
            fontWeight: 'bold',
            color: 'black',
            marginLeft: 140,
            }}>Es Teh</Text>
            </View> 
            <View style={{
          flexDirection: 'row',
          flex: 0,
          paddingLeft: 16,
          paddingRight: 16,
        }}>
            <Text style={{
                marginTop: 7,
                fontWeight: 'bold',
                color: 'red',
            }}>Rp.5000</Text>
            <Text style={{
                marginTop: 7,
                fontWeight: 'bold',
                color: 'red',
                marginLeft: 142,
            }}>Rp.4000</Text>
            </View>
    </View>
  )
}

export default Home