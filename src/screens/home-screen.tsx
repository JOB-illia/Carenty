import { Image, StyleSheet, View } from 'react-native';
import {
  Colors,
  Container,
  Spaces,
  Title,
  VariantHeading,
  TextBody,
  variant_body,
} from '~/src/shared/ui';
import { useEffect, useState } from 'react';
import { carenty } from '~/src/shared/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ({ navigation }) => {
  const [publishedVehicles, setPublishedVehicles] = useState<any>([]);

  useEffect(() => {
    if (publishedVehicles.length === 0) {
      (async () => {
        try {
          const token = await AsyncStorage.getItem('token');

          const { data } = await carenty.get('/api/published-vehicles', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          setPublishedVehicles(data);
        } catch (e: unknown) {
          console.log('error!!!!!!', e);
        }
      })();
    }
  }, []);

  console.log(publishedVehicles.data);

  return (
    <View style={styles.section}>
      <Container style={styles.container}>
        <Title variant={VariantHeading.heading_6} style={{ marginBottom: 20 }}>
          Published Vehicles
        </Title>
        {publishedVehicles?.data?.map((item) => (
          <View style={styles.block}>
            <TextBody variantSizes={variant_body.text_2} style={styles.li}>
              {item.name}
            </TextBody>
          </View>
        ))}
      </Container>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    backgroundColor: Colors.light.background,
    minHeight: '100%',
  },
  container: {
    paddingVertical: Spaces['space-40'],
    paddingLeft: Spaces['space-16'],
    paddingRight: Spaces['space-16'],
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    backgroundColor: Colors.light.background,
  },
  block: {
    width: '100%',
    textAlign: 'center',
    textTransform: 'capitalize',
    lineHeight: 32,
    borderWidth: 1,
    borderColor: 'red',
    borderStyle: 'solid',
    padding: 10,
    marginBottom: 8,
  },
  li: {
    textTransform: 'capitalize',
  },
  flex: {
    display: 'flex',
    alignItems: 'flex-start',
  },
});

export default HomeScreen;
