module.exports = function towelSort(matrix) {
    if (!matrix || matrix.length === 0) {
        return [];
    }

    const aa = matrix.reduce((c, d, i) => {
        if (i % 2 === 1) {
            return c.concat(d.reverse());
        }
        return c.concat(d);
    }, []);

    return aa;
};
