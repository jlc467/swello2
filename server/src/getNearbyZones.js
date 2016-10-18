import db from './db'
import Promise from 'bluebird'
import _ from 'lodash'
import extent from 'geojson-extent'

const getNearbyZones = ({ lat, long }) =>
  new Promise((resolve, reject) => {
    const query = {
      g: `point(${long} ${lat})`,
      limit: 6,
      nearest: true,
      format: 'geojson'
    }

    db.geo('zone_polygons', 'zones', query).then(
      zones => {
        if (!_.has(zones, 'features')) throw Error('No features found!')
        const zone = zones.features[0]
        const zoneExtent = extent(zone)
        console.log('zoneExtent', zoneExtent)
        return resolve(zones)
      }).catch(err => {
        console.error(err)
        return reject({ message: 'Failed to retrieve nearby zones.'})
    })
  })

const getNearbyZonesRequest = (req, res) => {
  if (!req.body || !req.body.coordinates || !req.body.coordinates.lat || !req.body.coordinates.long) {
    return res.status(409).send({ message: 'Request is missing coordinates needed to find nearby zones.' })
  }
  getNearbyZones(req.body.coordinates).then(
    result => res.send(result),
    reason => res.status(409).send(reason)
  )
}

export default getNearbyZonesRequest