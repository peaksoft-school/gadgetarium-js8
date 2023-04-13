import { styled } from '@mui/material'

import React from 'react'

import {
  YMaps,
  Map as YandexMap,
  Placemark,
  FullscreenControl,
  GeolocationControl,
  TrafficControl,
  ZoomControl
} from 'react-yandex-maps'

const StyledMap1 = styled(YandexMap)(() => ({
  width: '100%',
  height: '100%'
}))

const Map1 = () => {
  return (
    <YMaps>
      <StyledMap1
        defaultState={{
          center: [42.875969, 74.603698],
          zoom: 6
        }}
      >
        <Placemark geometry={[42.875969, 74.603698]} />
        <FullscreenControl options={{ foat: 'left' }} />
        <GeolocationControl options={{ foat: 'right' }} />
        <TrafficControl options={{ foat: 'right' }} />

        <ZoomControl options={{ float: 'left' }} />
      </StyledMap1>
    </YMaps>
  )
}

export default Map1
