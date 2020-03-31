
export const colorReducer = (state, action) => {
    switch(action.type) {
        case 'LIGHT':
            return {
                currentTheme:"LIGHT",
                div:"light",
                btn:"light-btn",
                input:"light-input",
                background:"light-bg",
                body: "#eaeaea"
            }
        case 'DARK':
            return {
                currentTheme:"DARK",
                div:"dark",
                btn:"dark-btn",
                input:"dark-input",
                background:"dark-bg",
                body: "#2a2a2a"
            }

        case 'SKY_GREEN':
            return {
                currentTheme:"SKY_GREEN",
                div:"sky-green",
                btn:"sky-green-btn",
                input:"sky-green-input",
                background:"sky-green-bg",
                body: "#008080"
            }

        case 'LIGHT_RED':
            return {
                currentTheme:"LIGHT_RED",
                div:"light-red",
                btn:"light-red-btn",
                input:"light-red-input",
                background:"light-red-bg",
                body: "#ff8080"
            }

        case 'DARK_RED':
            return {
                currentTheme:"DARK_RED",
                div:"dark-red",
                btn:"dark-red-btn",
                input:"dark-red-input",
                background:"dark-red-bg",
                body: "#800000"
            }

        case 'PINK':
            return {
                currentTheme:"PINK",
                div:"pink",
                btn:"pink-btn",
                input:"pink-input",
                background:"pink-bg",
                body: "#ff80c0"
            }

        case 'ORANGE':
            return {
                currentTheme:"ORANGE",
                div:"orange",
                btn:"orange-btn",
                input:"orange-input",
                background:"orange-bg",
                body: "#ff732f"
            }

        case 'SKY_BLUE':
            return {
                currentTheme:"SKY_BLUE",
                div:"sky-blue",
                btn:"sky-blue-btn",
                input:"sky-blue-input",
                background:"sky-blue-bg",
                body: "#0080c0"
            }
        
            
        default:
            return state
    }
}