import { PredefinedInterview } from "../../types/predefined-interview";

import { fullstack_developer } from "./fullstack-developer";
import { frontend_developer } from "./frontend-developer";
import { backend_developer } from "./backend-developer";
import { software_engineer } from "./software-engineer";
import { data_scientist } from "./data-scientist";
import { ml_engineer } from "./ml-engineer";
import { ai_engineer } from "./ai-engineer";
import { data_analyst } from "./data-analyst";
import { devops_engineer } from "./devops-engineer";
import { cloud_engineer } from "./cloud-engineer";
import { cybersecurity_analyst } from "./cybersecurity-analyst";
import { qa_test_engineer } from "./qa-test-engineer";
import { product_manager } from "./product-manager";
import { business_analyst } from "./business-analyst";
import { ui_ux_designer } from "./ui-ux-designer";
import { digital_marketing } from "./digital-marketing";
import { swe_behavioral } from "./swe-behavioral";
import { pm_behavioral } from "./pm-behavioral";
import { general_hr } from "./general-hr";
import { leadership_management } from "./leadership-management";

export const PREDEFINED_INTERVIEWS: Record<string, PredefinedInterview> = {
  "fullstack-developer": fullstack_developer,
  "frontend-developer": frontend_developer,
  "backend-developer": backend_developer,
  "software-engineer": software_engineer,
  "data-scientist": data_scientist,
  "ml-engineer": ml_engineer,
  "ai-engineer": ai_engineer,
  "data-analyst": data_analyst,
  "devops-engineer": devops_engineer,
  "cloud-engineer": cloud_engineer,
  "cybersecurity-analyst": cybersecurity_analyst,
  "qa-test-engineer": qa_test_engineer,
  "product-manager": product_manager,
  "business-analyst": business_analyst,
  "ui-ux-designer": ui_ux_designer,
  "digital-marketing": digital_marketing,
  "swe-behavioral": swe_behavioral,
  "pm-behavioral": pm_behavioral,
  "general-hr": general_hr,
  "leadership-management": leadership_management,
};
