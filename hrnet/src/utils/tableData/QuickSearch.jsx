import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";

/**
 * @name QuickSearchToolbat
 * @description Create the search bar on the top of the table
 * @returns {JSX.Element}
 */
export default function QuickSearchToolbar (props) 
{
    return (
      <Box
        sx={{
          p: 0.5,
          pb: 0
        }}
      >
        <TextField
          variant="standard"
          value={props.value}
          onChange={props.onChange}
          placeholder="Search employee…"
          InputProps={{
            startAdornment: <SearchIcon fontSize="medium" />,
            endAdornment: (
              <IconButton aria-label="Clear" title="Clear" size="medium" style={{ visibility: props.value ? "visible" : "hidden" }} onClick={props.clearSearch}>
                <ClearIcon fontSize="medium" />
              </IconButton>
            )
          }}
          sx={{
            width: 
            {
              xs: 1,
              sm: "auto"
            },
            m: (theme) => theme.spacing(1, 0.75, 1.5),
            "& .MuiSvgIcon-root": 
            {
              mr: 0.5
            },
            "& .MuiInput-underline:before": 
            {
              borderBottom: 1.5,
              borderColor: "divider"
            }
          }}
        />
      </Box>
  )
}
  