const getEnrichedPhotos = async (photos, albums, users, offset = 0, limit = 25) => { 
    return photos.map(photo => {
        const album = albums.find(album => album.id === photo.albumId)
        const user = users.find(user => user.id === album.userId)
        const { albumId, ...photoData } = photo
        const { userId, ...albumData } = album
        return { ...photoData, album: {...albumData, user}}
    }).slice(offset)
}

export const applyFilters = async (filters, data) => { 
    const { photos, albums, users } = data
    let filteredPhotos = photos
    let albumIds = []
    let userIds = []

    if(filters.title) {
        filteredPhotos = filteredPhotos.filter(photo => photo.title.includes(filters.title))
    }

    if(filters['album.title']) {
        console.log('filter', filters['album.title'])
        albumIds = albums.filter(album => album.title.includes(filters['album.title'])).map(album => album.id)
        filteredPhotos = filteredPhotos.filter(photo => albumIds.includes(photo.albumId))
    }

    if(filters['album.user.email']) {
        userIds = users.filter(user => user.email === filters['album.user.email']).map(user => user.id)
        albumIds = albums.filter(album => userIds.includes(album.userId)).map(album => album.id)
        filteredPhotos = filteredPhotos.filter(photo => albumIds.includes(photo.albumId))
    }

    const value = getEnrichedPhotos(filteredPhotos, albums, users, filters.offset, filters.limit)
    return value
}
