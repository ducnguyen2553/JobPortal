
//validation functions
export const validateEmail = (email) => {
    if (!email.trim()) return "Email is required";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return "Please enter a valid email address";
    return "";
};

export const validatePassword = (password) => {
    if (!password) return "Password is required";
    if (!password.length >= 6) return "Password must be at least 6 characters";
    // if (!/(?=.*[a-z])/.test(password)) {
    //     return "Password must contain at least one lowercase letter"
    // }
    // if (!/(?=.*[a-z])/.test(password)) {
    //     return "Password must contain at least one uppercase letter"
    // }
    // if (!/(?=.*[a-z])/.test(password)) {
    //     return "Password must contain at least one number"
    // }
    return "";
};

export const validateAvatar = (file) => {
    if (!file) return "";

    const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
    if (!allowedTypes.includes(file.type)) {
        return "Avatar must be a JPG of PNG file";
    }

    const maxSize = 5 * 1024 * 1024; //5mb
    if (file.size > maxSize) {
        return "Avatar must be less than 5mb";
    }

    return "";
};

export const getInitials = (name) => {
    return name
        .split(" ")
        .map((word) => word.charAt(0))
        .join("")
        .toUpperCase()
        .slice(0, 2);
};