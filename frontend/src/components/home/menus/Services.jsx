import React, { useEffect, useState } from 'react';
import { Container, Card, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { getListAllServicesActions } from '../../../actions/services/getListServicesActions';
import CardService from './servicesComponents/CardService';

export default function Services() {

  const [services, setServices] = useState(null);

  const getListAllServices = async () => {

    try {
      const result = await getListAllServicesActions();

      setServices(result);

      return;

    } catch (error) {
      console.log(error);
    }

  }

  useEffect(() => {
    getListAllServices();
  }, [])

  return (
    <>
      <Container
        maxWidth={'xl'}
        style={{
          backgroundColor: 'white',
          marginTop: '4em',
        }}>


        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 4 }}>
          {services ?
            services.map((element, index) => {
              return (
                <Grid xs={2} sm={4} md={1} key={index}>
                  <CardService
                    id={element.service_information_id}
                    name={element.name}
                    image_path={element.image_path}
                  />
                </Grid>
              )
            })

            : <></>}
        </Grid>


      </Container>
    </>
  )
}
