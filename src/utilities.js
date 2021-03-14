
export function getLocationName(node) {
	return node && node.attributes.name.value
}

export function getSelectedLocationName(map, locationId) {
	return locationId && map.locations.find(location => location.id === locationId).name
}