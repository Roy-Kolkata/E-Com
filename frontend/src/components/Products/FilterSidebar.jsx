import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

const FilterSidebar = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [filters, setFilters] = useState({
        category: "",
        gender: "",
        color: "",
        size: [],
        material: [],
        brand: [],
        minPrice: 0,
        maxPrice: 100,
    })
    const [priceRange, setPriceRange] = useState([0, 100])

    const category = ["Top Wear", "Bottom Wear"]
    const colors = ["Red", "Blue", "Black", "Green", "Yellow", "Gray", "White", "Pink", "Beige", "Navy"]
    const sizes = ["XS", "S", "M", "L", "XL", "XXL"]
    const materials = ["Cotton", "Wool", "Denim", "Polyester", "Silk", "Lenin", "Viscose", "Fleece"]
    const brands = ["Urban Threads", "Modern Fit", "Street Style", "Beace Breeze", "Fashionista", "ChicStyle"]
    const genders = ["Men", "Women"]

    // ✅ Sync state with URL
    useEffect(() => {
        const params = Object.fromEntries([...searchParams])
        setFilters({
            category: params.category || "",
            gender: params.gender || "",
            color: params.color || "",
            size: params.size ? params.size.split(",") : [],
            material: params.material ? params.material.split(",") : [],
            brand: params.brand ? params.brand.split(",") : [],
            minPrice: params.minPrice || 0,
            maxPrice: params.maxPrice || 100
        })
        setPriceRange([0, params.maxPrice || 100])
    }, [searchParams])

    // ✅ Update URL params whenever filters change
    const updateURLParams = (newFilters) => {
        const params = new URLSearchParams()
        Object.keys(newFilters).forEach((key) => {
            if (Array.isArray(newFilters[key]) && newFilters[key].length > 0) {
                params.set(key, newFilters[key].join(","))
            } else if (newFilters[key]) {
                params.set(key, newFilters[key])
            }
        })
        setSearchParams(params)
    }

    // ✅ Generic handler
    const handleFilterChange = (e) => {
        const { name, value, checked, type } = e.target
        let newFilters = { ...filters }

        if (type === "checkbox") {
            if (checked) {
                newFilters[name] = [...(newFilters[name] || []), value]
            } else {
                newFilters[name] = newFilters[name].filter((item) => item !== value)
            }
        } else {
            newFilters[name] = value
        }

        setFilters(newFilters)
        updateURLParams(newFilters)
    }

    return (
        <div className="p-4">
            <h3 className="text-xl font-medium mb-4 text-gray-800">Filter</h3>

            {/* Category */}
            <div className="mb-6">
                <label className="block text-gray-600 font-medium mb-2">Category</label>
                {category.map((cat) => (
                    <div key={cat} className="flex items-center mb-1">
                        <input
                            type="radio"
                            name="category"
                            value={category}
                            checked={filters.category === category}
                            onChange={handleFilterChange}
                            className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
                        />
                        <span>{cat}</span>
                    </div>
                ))}
            </div>

            {/* Gender */}
            <div className="mb-6">
                <label className="block text-gray-600 font-medium mb-2">Gender</label>
                {genders.map((g) => (
                    <div key={g} className="flex items-center mb-1">
                        <input
                            type="radio"
                            name="gender"
                            value={g}
                            checked={filters.gender === g}
                            onChange={handleFilterChange}
                            className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
                        />
                        <span>{g}</span>
                    </div>
                ))}
            </div>

            {/* Color */}
            <div className="mb-6">
                <label className="block text-gray-600 font-medium mb-2">Color</label>
                <div className="flex flex-wrap gap-2">
                    {colors.map((c) => (
                        <button key={c} name='color' value={c} onClick={handleFilterChange} className={`w-8 h-8 rounded-full border border-gray-300 cursor-pointer transition hover:scale-105 ${filters.c===c? "ring-2":"ring-blue-500"}`} style={{backgroundColor:c.toLowerCase()}}></button>
                    ))}
                </div>
            </div>

            {/* Sizes */}
            <div className="mb-6">
                <label className="block text-gray-600 font-medium mb-2">Size</label>
                {sizes.map((s) => (
                    <div key={s} className="flex items-center mb-1">
                        <input
                            type="checkbox"
                            name="size"
                            value={s}
                            checked={filters.size.includes(s)}
                            onChange={handleFilterChange}
                            className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
                        />
                        <span>{s}</span>
                    </div>
                ))}
            </div>

            {/* Materials */}
            <div className="mb-6">
                <label className="block text-gray-600 font-medium mb-2">Material</label>
                {materials.map((m) => (
                    <div key={m} className="flex items-center mb-1">
                        <input
                            type="checkbox"
                            name="material"
                            value={m}
                            checked={filters.material.includes(m)}
                            onChange={handleFilterChange}
                            className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
                        />
                        <span>{m}</span>
                    </div>
                ))}
            </div>

            {/* Brands */}
            <div className="mb-6">
                <label className="block text-gray-600 font-medium mb-2">Brand</label>
                {brands.map((b) => (
                    <div key={b} className="flex items-center mb-1">
                        <input
                            type="checkbox"
                            name="brand"
                            value={b}
                            checked={filters.brand.includes(b)}
                            onChange={handleFilterChange}
                            className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
                        />
                        <span>{b}</span>
                    </div>
                ))}
            </div>

            {/* Price */}
            <div className="mb-8">
                <label className="block text-gray-600 font-medium mb-2">Price Range</label>
                <input
                    type="range"
                    min={0}
                    max={100}
                    value={priceRange[1]}
                    onChange={(e) => {
                        const val = Number(e.target.value)
                        setPriceRange([0, val])
                        const newFilters = { ...filters, maxPrice: val }
                        setFilters(newFilters)
                        updateURLParams(newFilters)
                    }}
                    className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-gray-600 mt-2">
                    <span>$0</span>
                    <span>${priceRange[1]}</span>
                </div>
            </div>
        </div>
    )
}

export default FilterSidebar
