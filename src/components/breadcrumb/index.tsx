import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function Breadcrumb(): React.ReactElement {
    const breadcrumbs = [
        <Typography key="1" color="text.primary" className="text-sm">
            Breadcrumb 1
        </Typography>,
        <Typography key="2" color="text.primary" className="text-sm">
            Breadcrumb 2
        </Typography>,
        <Typography key="3" color="text.primary" className="text-sm">
            Breadcrumb 3
        </Typography>,
    ];

    return (
        <Stack className="page-path mb-5" spacing={2}>
            <Breadcrumbs
                separator={<NavigateNextIcon fontSize="small" />}
                aria-label="breadcrumb"
            >
                {breadcrumbs}
            </Breadcrumbs>
        </Stack>
    );
}
