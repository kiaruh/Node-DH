module.exports = (sequelize, dataTypes) => {
    let alias = 'Genre'
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(100),
            notNull: true
        },
        ranking: {
            type: dataTypes.INTEGER
        },
        active: {
            type: dataTypes.BOOLEAN
        }
    }
    let config = {
        timestamps: true,
        tableName: 'genres',
        underscored: true
    }

    const Genre = sequelize.define(alias, cols, config)
    return Genre
}
