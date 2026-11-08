"""
Academic Audit Excel Generator for KTU Course GXEST605: Design Thinking and Product Development.
Complies with official KTU B.Tech Regulations (2024 Scheme).
Continuous Internal Evaluation (CIE) Marks Breakdown:
- Attendance: 5 Marks
- Assignments: 20 Marks
- Internal Examination: 10 Marks
- Reflective Journal and Portfolio: 5 Marks
Total CIE = 40 Marks
"""
import openpyxl
from openpyxl.styles import Font, PatternFill, Alignment, Border, Side
from openpyxl.utils import get_column_letter

def generate_audit_excel(output_filename="GXEST605_Internal_Marks_Audit.xlsx"):
    wb = openpyxl.Workbook()
    
    # -------------------------------------------------------------
    # Sheet 1: Internal Mark Distribution (Mandatory Section 8)
    # -------------------------------------------------------------
    ws1 = wb.active
    ws1.title = "Internal Mark Distribution"
    ws1.views.sheetView[0].showGridLines = True
    
    # Colors & Fonts
    burgundy_fill = PatternFill(start_color="58112C", end_color="58112C", fill_type="solid")
    gold_fill = PatternFill(start_color="D4AF37", end_color="D4AF37", fill_type="solid")
    light_gold_fill = PatternFill(start_color="FBF7EE", end_color="FBF7EE", fill_type="solid")
    white_font_bold = Font(name="Calibri", size=11, bold=True, color="FFFFFF")
    navy_font_bold = Font(name="Calibri", size=11, bold=True, color="0A1128")
    title_font = Font(name="Georgia", size=14, bold=True, color="58112C")
    subtitle_font = Font(name="Calibri", size=10, bold=True, color="333333")
    
    thin_border = Border(
        left=Side(style='thin', color='CCCCCC'),
        right=Side(style='thin', color='CCCCCC'),
        top=Side(style='thin', color='CCCCCC'),
        bottom=Side(style='thin', color='CCCCCC')
    )
    header_border = Border(
        left=Side(style='medium', color='D4AF37'),
        right=Side(style='medium', color='D4AF37'),
        top=Side(style='medium', color='D4AF37'),
        bottom=Side(style='medium', color='D4AF37')
    )
    
    # Header Titles
    ws1.merge_cells("A1:L1")
    ws1["A1"] = "APJ ABDUL KALAM TECHNOLOGICAL UNIVERSITY (KTU) - ACADEMIC AUDIT"
    ws1["A1"].font = title_font
    ws1["A1"].alignment = Alignment(horizontal="center", vertical="center")
    
    ws1.merge_cells("A2:L2")
    ws1["A2"] = "GXEST605 – DESIGN THINKING AND PRODUCT DEVELOPMENT | S6 B.TECH CSE"
    ws1["A2"].font = subtitle_font
    ws1["A2"].alignment = Alignment(horizontal="center", vertical="center")
    
    ws1.merge_cells("A3:L3")
    ws1["A3"] = "Continuous Internal Evaluation (CIE) Mark Sheet | Faculty: Jane Rose, Dept. of Computer Science & Engineering"
    ws1["A3"].font = subtitle_font
    ws1["A3"].alignment = Alignment(horizontal="center", vertical="center")
    
    # Table Column Headers
    headers = [
        "Sl. No",
        "Register No",
        "Student Name",
        "Attendance (Max 5)",
        "Assignments (Max 20)",
        "Internal Exam (Max 10)",
        "Reflective Journal & Portfolio (Max 5)",
        "Total CIE (Max 40)",
        "CO1 (K5)",
        "CO2 (K6)",
        "CO3 (K5)",
        "CO4/CO5 (K4)"
    ]
    
    ws1.row_dimensions[4].height = 28
    for col_idx, header in enumerate(headers, 1):
        cell = ws1.cell(row=4, column=col_idx, value=header)
        cell.font = white_font_bold
        cell.fill = burgundy_fill
        cell.alignment = Alignment(horizontal="center", vertical="center", wrap_text=True)
        cell.border = header_border
        
    # Sample Audited Students Data
    sample_students = [
        ("RET23CS001", "Aadithya S. Nair", 5.0, 19.5, 9.5, 5.0, 92, 95, 94, 95),
        ("RET23CS002", "Abhinav Krishna M", 4.5, 18.0, 8.5, 4.5, 88, 85, 86, 88),
        ("RET23CS003", "Ananya R. Warrier", 5.0, 20.0, 10.0, 5.0, 98, 96, 98, 100),
        ("RET23CS004", "Basil Eldho Thomas", 4.0, 16.5, 7.5, 4.0, 78, 80, 82, 80),
        ("RET23CS005", "Devika Prashanth", 5.0, 19.0, 9.0, 5.0, 90, 92, 90, 94),
        ("RET23CS006", "Gautham Jayadeep", 4.5, 17.5, 8.0, 4.5, 85, 84, 85, 86),
        ("RET23CS007", "Kiran V. Varma", 5.0, 18.5, 8.5, 4.5, 88, 90, 89, 87),
        ("RET23CS008", "Meenakshi Menon", 5.0, 19.5, 9.5, 5.0, 95, 94, 96, 95),
        ("RET23CS009", "Naveen Rajeev", 4.0, 16.0, 7.0, 4.0, 76, 78, 79, 77),
        ("RET23CS010", "Parvathy S. Kumar", 5.0, 20.0, 9.5, 5.0, 96, 95, 97, 98),
        ("RET23CS011", "Rahul Chandra Bose", 4.5, 17.0, 8.0, 4.0, 82, 80, 83, 85),
        ("RET23CS012", "Rhea Elizabeth John", 5.0, 19.0, 9.0, 5.0, 91, 93, 92, 94),
        ("RET23CS013", "Siddharth K. Nair", 4.0, 16.5, 7.5, 4.0, 79, 81, 80, 82),
        ("RET23CS014", "Sneha Susan Biju", 5.0, 19.5, 9.0, 4.5, 94, 92, 93, 95),
        ("RET23CS015", "Vishnu Prasad", 4.5, 18.0, 8.5, 4.5, 86, 88, 87, 89)
    ]
    
    start_row = 5
    for idx, (reg, name, att, ass, exam, refl, co1, co2, co3, co45) in enumerate(sample_students, 1):
        cur_row = start_row + idx - 1
        ws1.row_dimensions[cur_row].height = 20
        
        ws1.cell(row=cur_row, column=1, value=idx).alignment = Alignment(horizontal="center")
        ws1.cell(row=cur_row, column=2, value=reg).alignment = Alignment(horizontal="center")
        ws1.cell(row=cur_row, column=3, value=name).alignment = Alignment(horizontal="left")
        ws1.cell(row=cur_row, column=4, value=att).alignment = Alignment(horizontal="center")
        ws1.cell(row=cur_row, column=5, value=ass).alignment = Alignment(horizontal="center")
        ws1.cell(row=cur_row, column=6, value=exam).alignment = Alignment(horizontal="center")
        ws1.cell(row=cur_row, column=7, value=refl).alignment = Alignment(horizontal="center")
        
        # KTU SUM Formula
        total_cell = ws1.cell(row=cur_row, column=8, value=f"=SUM(D{cur_row}:G{cur_row})")
        total_cell.alignment = Alignment(horizontal="center")
        total_cell.font = Font(name="Calibri", size=11, bold=True, color="58112C")
        total_cell.fill = light_gold_fill
        
        ws1.cell(row=cur_row, column=9, value=f"{co1}%").alignment = Alignment(horizontal="center")
        ws1.cell(row=cur_row, column=10, value=f"{co2}%").alignment = Alignment(horizontal="center")
        ws1.cell(row=cur_row, column=11, value=f"{co3}%").alignment = Alignment(horizontal="center")
        ws1.cell(row=cur_row, column=12, value=f"{co45}%").alignment = Alignment(horizontal="center")
        
        for c in range(1, 13):
            ws1.cell(row=cur_row, column=c).border = thin_border
            
    # Class Statistics Row
    end_row = start_row + len(sample_students) - 1
    stat_row = end_row + 2
    
    ws1.cell(row=stat_row, column=3, value="Class Average:").font = navy_font_bold
    ws1.cell(row=stat_row, column=3).alignment = Alignment(horizontal="right")
    ws1.cell(row=stat_row, column=4, value=f"=AVERAGE(D{start_row}:D{end_row})").font = navy_font_bold
    ws1.cell(row=stat_row, column=5, value=f"=AVERAGE(E{start_row}:E{end_row})").font = navy_font_bold
    ws1.cell(row=stat_row, column=6, value=f"=AVERAGE(F{start_row}:F{end_row})").font = navy_font_bold
    ws1.cell(row=stat_row, column=7, value=f"=AVERAGE(G{start_row}:G{end_row})").font = navy_font_bold
    avg_total = ws1.cell(row=stat_row, column=8, value=f"=AVERAGE(H{start_row}:H{end_row})")
    avg_total.font = Font(name="Calibri", size=11, bold=True, color="58112C")
    avg_total.fill = gold_fill
    
    for c in range(4, 9):
        ws1.cell(row=stat_row, column=c).number_format = '0.00'
        ws1.cell(row=stat_row, column=c).alignment = Alignment(horizontal="center")
        ws1.cell(row=stat_row, column=c).border = header_border

    # Faculty Signatures Section
    sig_row = stat_row + 4
    ws1.cell(row=sig_row, column=2, value="Prepared By:").font = navy_font_bold
    ws1.cell(row=sig_row+1, column=2, value="Jane Rose").font = Font(name="Calibri", size=11, bold=True)
    ws1.cell(row=sig_row+2, column=2, value="Assistant Professor, Dept of CSE").font = subtitle_font
    
    ws1.cell(row=sig_row, column=6, value="Verified By (DAC):").font = navy_font_bold
    ws1.cell(row=sig_row+1, column=6, value="Department Academic Committee").font = subtitle_font
    
    ws1.cell(row=sig_row, column=10, value="Approved By (HOD):").font = navy_font_bold
    ws1.cell(row=sig_row+1, column=10, value="Head of Department, CSE").font = subtitle_font

    # Auto-adjust column widths
    for col in ws1.columns:
        max_len = 0
        col_letter = get_column_letter(col[0].column)
        for cell in col:
            val_str = str(cell.value or '')
            if len(val_str) > max_len and '\n' not in val_str:
                max_len = len(val_str)
        ws1.column_dimensions[col_letter].width = max(max_len + 4, 12)
    ws1.column_dimensions["C"].width = 24
    ws1.column_dimensions["B"].width = 16

    # -------------------------------------------------------------
    # Sheet 2: KTU Portal Mark Sheet Template (Mandatory Section 9)
    # -------------------------------------------------------------
    ws2 = wb.create_sheet(title="KTU Portal Format")
    ws2.views.sheetView[0].showGridLines = True
    
    ws2.merge_cells("A1:G1")
    ws2["A1"] = "KTU E-GOVERNANCE PORTAL - CONSOLIDATED CIE UPLOAD DRAFT"
    ws2["A1"].font = title_font
    ws2["A1"].alignment = Alignment(horizontal="center", vertical="center")
    
    portal_headers = ["Sl. No", "Student Register Number", "Student Name", "CIE Marks (40)", "Attendance %", "Eligibility Status", "Digital Signature Status"]
    ws2.row_dimensions[3].height = 24
    for idx, h in enumerate(portal_headers, 1):
        c = ws2.cell(row=3, column=idx, value=h)
        c.font = white_font_bold
        c.fill = PatternFill(start_color="0A1128", end_color="0A1128", fill_type="solid")
        c.alignment = Alignment(horizontal="center", vertical="center")
        
    for idx, (reg, name, att, ass, exam, refl, co1, co2, co3, co45) in enumerate(sample_students, 1):
        r = 3 + idx
        ws2.cell(row=r, column=1, value=idx).alignment = Alignment(horizontal="center")
        ws2.cell(row=r, column=2, value=reg).alignment = Alignment(horizontal="center")
        ws2.cell(row=r, column=3, value=name).alignment = Alignment(horizontal="left")
        ws2.cell(row=r, column=4, value=f"='Internal Mark Distribution'!H{start_row + idx - 1}").alignment = Alignment(horizontal="center")
        ws2.cell(row=r, column=5, value="95%").alignment = Alignment(horizontal="center")
        ws2.cell(row=r, column=6, value="Eligible").alignment = Alignment(horizontal="center")
        ws2.cell(row=r, column=7, value="Verified & Locked").alignment = Alignment(horizontal="center")
        
        for col_i in range(1, 8):
            ws2.cell(row=r, column=col_i).border = thin_border
            
    for col in ws2.columns:
        col_letter = get_column_letter(col[0].column)
        ws2.column_dimensions[col_letter].width = 22
        
    wb.save(output_filename)
    wb.close()
    print(f"Generated KTU Academic Audit Excel Sheet successfully: {output_filename}")
    return output_filename

if __name__ == "__main__":
    generate_audit_excel()

